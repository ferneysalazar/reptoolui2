import React from "react";
import { I } from "../icons.jsx";

const TITLES = {
  filings: ["Filings", "Browse, stage, and track every filing across jurisdictions."],
  exceptions: ["Exceptions", "Records that failed validation or were rejected by competent authorities."],
  schedule: ["Schedule", "Calendar of upcoming deadlines per jurisdiction and reporting regime."],
  schemas: ["Schema registry", "XSD versions, deployment status and per-jurisdiction overrides."],
  users: ["Users & access", "Role assignments, scoped permissions, and MFA enforcement."],
  docs: ["Schemas & docs", "Reference materials, schema diffs, and regulator guidance."],
  audit: ["Audit archive", "Immutable retention store of every submitted filing."],
};

export function PlaceholderScreen({ id }) {
  const [title, sub] = TITLES[id] || [id, ""];
  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">{title}</h1>
          <p className="page-sub">{sub}</p>
        </div>
      </div>
      <div className="empty-canvas">
        <I.panel size={28} />
        <div style={{ marginTop: 10, fontSize: 14 }}>
          This module is staged in the prototype.
        </div>
        <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>
          Try Dashboard, Institution verification, Filers, Jurisdictions, Events, or Operation notifications.
        </div>
      </div>
    </div>
  );
}
