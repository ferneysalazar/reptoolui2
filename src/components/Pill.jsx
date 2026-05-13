import React from "react";

export const Pill = ({ kind = "", children, dot = true }) => (
  <span className={`pill ${kind}`}>
    {dot && <span className="dot"></span>}
    {children}
  </span>
);
