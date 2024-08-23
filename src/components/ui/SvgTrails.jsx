import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./SvgTrails.css";

const svgns = "http://www.w3.org/2000/svg";
const ease = 0.7;

const pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const updatePointer = (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
};

const createLine = (leader) => {
  const line = document.createElementNS(svgns, "line");

  const get = gsap.getProperty(line);
  const set = gsap.quickSetter(line, "attr");

  const modifier = (prop) => {
    const n2 = `${prop}2`;

    return () => {
      const posN = get(prop);
      const leaderN = leader(prop);
      const n = posN + (leaderN - posN) * ease;

      set({ [n2]: leaderN - n });

      return n;
    };
  };

  gsap.set(line, pointer);

  gsap.to(line, {
    x: "+=1",
    y: "+=1",
    repeat: -1,
    ease: "linear",
    modifiers: {
      x: modifier("x"),
      y: modifier("y"),
    },
  });

  return line;
};

const createTrail = (selector, trailLength = 10) => {
  const root = document.querySelector(selector);

  let leader = (prop) => (prop === "x" ? pointer.x : pointer.y);

  for (let i = 0; i < trailLength; i++) {
    const line = createLine(leader);
    root.appendChild(line);
    leader = gsap.getProperty(line);
  }
};

const SvgTrails = () => {
  useEffect(() => {
    window.addEventListener("pointerdown", updatePointer);
    window.addEventListener("pointermove", updatePointer, { passive: true });

    createTrail("#line-1", 30);
    createTrail("#line-2", 20);
    createTrail("#line-3", 10);

    return () => {
      window.removeEventListener("pointerdown", updatePointer);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <>
      <svg id="line-1"></svg>
      <svg id="line-2"></svg>
      <svg id="line-3"></svg>
    </>
  );
};

export default SvgTrails;
