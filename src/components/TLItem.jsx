import React from "react";
import { I } from "../icons.jsx";

export const TLItem = ({ kind, t1, t2, time }) => (
  <div className="tl-item">
    <div className={`tl-node ${kind || ""}`}>
      {kind === "ok" && <I.check size={11} stroke={2.5} />}
      {kind === "warn" && <I.alert size={11} stroke={2} />}
      {kind === "bad" && <I.x size={11} stroke={2.5} />}
      {!kind && <I.dot size={11} />}
    </div>
    <div className="tl-body">
      <div className="t1">{t1}</div>
      <div className="t2">{t2}</div>
    </div>
    <div className="tl-time">{time}</div>
  </div>
);
