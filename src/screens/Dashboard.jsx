import React from "react";
import { I } from "../icons.jsx";
import { Pill } from "../components/Pill.jsx";

export function DashboardScreen({ ctx }) {
  const recent = [
    { code: "FIL-2026-001142", filer: "CRS Filing Agent — EMEA", juris: "Anguilla (AI)", type: "CRS", status: "warn", statusLabel: "Validation", updated: "12 min ago", records: 1248 },
    { code: "FIL-2026-001141", filer: "Self-filing", juris: "Cayman Islands (KY)", type: "FATCA", status: "ok", statusLabel: "Accepted", updated: "1 hr ago", records: 842 },
    { code: "FIL-2026-001138", filer: "FIRE Reporting Tool Outsourced Ops", juris: "Bermuda (BM)", type: "CRS", status: "info", statusLabel: "In transmission", updated: "2 hr ago", records: 314 },
    { code: "FIL-2026-001135", filer: "Self-filing", juris: "United Kingdom (GB)", type: "CRS", status: "bad", statusLabel: "Rejected", updated: "Yesterday", records: 0 },
    { code: "FIL-2026-001131", filer: "CRS Filing Agent — APAC", juris: "Singapore (SG)", type: "CRS", status: "ok", statusLabel: "Accepted", updated: "Yesterday", records: 2104 },
    { code: "FIL-2026-001129", filer: "Self-filing", juris: "Jersey (JE)", type: "FATCA", status: "ok", statusLabel: "Accepted", updated: "Mar 04", records: 188 },
  ];

  return (
    <div>
      <div className="hero">
        <div>
          <h1 className="greeting">
            Welcome back, <em>Mira</em>
          </h1>
          <div className="ctx">
            Reporting status for <strong>{ctx.institution}</strong> · period{" "}
            <strong>{ctx.year}</strong>. Filing window closes in{" "}
            <strong>43 days</strong>.
          </div>
        </div>
        <div className="summary">
          <div>
            <div className="label">Filings xxx</div>
            <div className="value">
              <em>142</em>
            </div>
          </div>
          <div>
            <div className="label">Open exceptions</div>
            <div className="value">47</div>
          </div>
          <div>
            <div className="label">Readiness</div>
            <div className="value">
              <em>94%</em>
            </div>
          </div>
        </div>
      </div>

      <div className="page-head" style={{ marginBottom: 16, alignItems: "center" }}>
        <div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: 22,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Recent filings
          </h2>
        </div>
        <div className="page-actions">
          <button className="btn">
            <I.upload size={14} />
            Import XML
          </button>
          <button className="btn primary">
            <I.plus size={14} />
            New filing
          </button>
        </div>
      </div>

      <div className="card">
        <table className="tbl">
          <thead>
            <tr>
              <th>Filing</th>
              <th>Filer</th>
              <th>Jurisdiction</th>
              <th>Type</th>
              <th className="num">Records</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((r) => (
              <tr key={r.code}>
                <td>
                  <span className="mono link">{r.code}</span>
                </td>
                <td>{r.filer}</td>
                <td>{r.juris}</td>
                <td>{r.type}</td>
                <td className="num">{r.records.toLocaleString()}</td>
                <td>
                  <Pill kind={r.status}>{r.statusLabel}</Pill>
                </td>
                <td className="muted">{r.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-foot">
          <span className="muted" style={{ fontSize: 12 }}>
            Showing 6 of 142 filings in {ctx.year}
          </span>
          <button className="btn sm ghost">
            View all
            <I.chevR size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
