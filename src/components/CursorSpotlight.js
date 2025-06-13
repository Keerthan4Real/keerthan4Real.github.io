// CursorSpotlight.js
import React, { useEffect } from "react";

const CursorSpotlight = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--y", y);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spotlightStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(6, 33, 233, 0.16), transparent 40%)`,
    zIndex: 1,
  };

  return <div style={spotlightStyle} />;
};

export default CursorSpotlight;
