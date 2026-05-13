import React from "react";
import { I } from "../icons.jsx";
import { Pill } from "../components/Pill.jsx";

export function EventsScreen() {
  const events = [
    { sev: "bad", actor: "HMRC AEOI Gateway", action: "Rejected filing", target: "FIL-2026-001135", code: "ERR-SCHEMA-MISMATCH", time: "Today · 11:08", details: "Schema v2.0 submitted; v2.1.1 required" },
    { sev: "warn", actor: "validation.engine", action: "Flagged records", target: "FIL-2026-001142 · 3 records", code: "WARN-MISSING-TIN", time: "Today · 09:46", details: "Auto-resolution attempted, 1 record remains open" },
    { sev: "ok", actor: "Cayman TIA", action: "Acknowledged filing", target: "FIL-2026-001141", code: "ACK-KY-2026-220041", time: "Today · 14:02", details: "1,248 records accepted; receipt attached" },
    { sev: "info", actor: "marina.sokolova", action: "Updated entity profile", target: "Opes Inc. International Bank (AI)", code: "CFG-UPDATE", time: "Mar 02 · 14:02", details: "Address changed; downstream filings re-queued" },
    { sev: "info", actor: "system.scheduler", action: "Schema pack deployed", target: "CRS v2.6.0", code: "SYS-SCHEMA-DEPLOY", time: "Mar 02 · 09:30", details: "Applied to 36 jurisdictions" },
    { sev: "ok", actor: "p.huang", action: "Bulk approved filings", target: "142 filings", code: "USR-BULK-APPROVE", time: "Mar 02 · 08:55", details: "Q1 close prepared for review" },
    { sev: "warn", actor: "transport.layer", action: "Credentials nearing expiry", target: "Jersey AEOI Portal", code: "CRED-EXPIRY-21D", time: "Mar 01 · 06:00", details: "Renewal window opens 15 Mar" },
    { sev: "info", actor: "FIRE Reporting Tool.platform", action: "Onboarded jurisdiction", target: "Liechtenstein (LI)", code: "JUR-ONBOARD", time: "Feb 27 · 16:21", details: "Schema v2.0, no transport credentials yet" },
  ];

  const sevLabel = (s) =>
    s === "ok" ? "Success" : s === "warn" ? "Warning" : s === "bad" ? "Error" : "Info";

  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">Events</h1>
          <p className="page-sub">
            Append-only ledger of every action that has touched the institution's reporting posture — system, user, and counterparty.
          </p>
        </div>
        <div className="page-actions">
          <div className="tabs">
            <span className="tab active">All</span>
            <span className="tab">System</span>
            <span className="tab">User</span>
            <span className="tab">Counterparty</span>
          </div>
          <button className="btn">
            <I.download size={14} />
            Export CSV
          </button>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 200px 140px", gap: 0 }}>
          {events.map((e, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  padding: "16px 18px",
                  borderTop: i ? "1px solid var(--line)" : 0,
                  borderRight: "1px solid var(--line)",
                }}
              >
                <div className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>
                  {e.time}
                </div>
                <div style={{ marginTop: 6 }}>
                  <Pill kind={e.sev}>{sevLabel(e.sev)}</Pill>
                </div>
              </div>
              <div
                style={{
                  padding: "16px 18px",
                  borderTop: i ? "1px solid var(--line)" : 0,
                }}
              >
                <div style={{ fontSize: 13.5 }}>
                  <span className="mono" style={{ color: "var(--ink-2)" }}>
                    {e.actor}
                  </span>
                  <span style={{ margin: "0 8px", color: "var(--ink-3)" }}>·</span>
                  <span style={{ fontWeight: 500 }}>{e.action}</span>
                  <span style={{ margin: "0 8px", color: "var(--ink-3)" }}>→</span>
                  <span>{e.target}</span>
                </div>
                <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>
                  {e.details}
                </div>
              </div>
              <div
                style={{
                  padding: "16px 18px",
                  borderTop: i ? "1px solid var(--line)" : 0,
                }}
              >
                <span className="mono" style={{ fontSize: 11, color: "var(--ink-3)" }}>
                  {e.code}
                </span>
              </div>
              <div
                style={{
                  padding: "16px 18px",
                  borderTop: i ? "1px solid var(--line)" : 0,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <button className="btn sm ghost">
                  Inspect
                  <I.ext size={12} />
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
