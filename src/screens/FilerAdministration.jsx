import React from "react";
import { I } from "../icons.jsx";
import { Pill } from "../components/Pill.jsx";

export function FilerAdministrationScreen() {
  const filers = [
    { id: "FLR-001", name: "Self-filing (Opes Inc. International)", role: "Primary", jurisCount: 4, recordCount: 8412, lastFile: "Mar 04, 2026", status: "ok", statusLabel: "Active" },
    { id: "FLR-002", name: "CRS Filing Agent — EMEA Ltd.", role: "Sponsor", jurisCount: 12, recordCount: 22118, lastFile: "Mar 04, 2026", status: "ok", statusLabel: "Active" },
    { id: "FLR-003", name: "CRS Filing Agent — APAC Pte.", role: "Sponsor", jurisCount: 8, recordCount: 14002, lastFile: "Mar 03, 2026", status: "ok", statusLabel: "Active" },
    { id: "FLR-004", name: "FIRE Reporting Tool Outsourced Ops", role: "Service provider", jurisCount: 6, recordCount: 4287, lastFile: "Mar 03, 2026", status: "warn", statusLabel: "Renewal in 21d" },
    { id: "FLR-005", name: "Kestrel Compliance Partners", role: "Service provider", jurisCount: 2, recordCount: 884, lastFile: "Feb 28, 2026", status: "info", statusLabel: "Probation" },
    { id: "FLR-006", name: "Brightwell Tax Advisory", role: "Service provider", jurisCount: 1, recordCount: 0, lastFile: "—", status: "bad", statusLabel: "Suspended" },
  ];

  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">
            Filer <em>administration</em>
          </h1>
          <p className="page-sub">
            Manage the entities authorised to submit filings on behalf of this institution, their roles, and their reach across jurisdictions.
          </p>
        </div>
        <div className="page-actions">
          <div className="search">
            <I.search size={14} />
            <input placeholder="Search filers, GIIN, contacts…" />
            <kbd>⌘K</kbd>
          </div>
          <button className="btn accent">
            <I.plus size={14} />
            Add filer
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <div className="hstack">
            <div className="tabs">
              <span className="tab active">All filers <span className="muted">· 6</span></span>
              <span className="tab">Primary <span className="muted">· 1</span></span>
              <span className="tab">Sponsors <span className="muted">· 2</span></span>
              <span className="tab">Service providers <span className="muted">· 3</span></span>
            </div>
          </div>
          <div className="hstack">
            <button className="btn sm ghost">
              <I.filter size={12} />
              Filter
            </button>
            <button className="btn sm ghost">
              <I.download size={12} />
              Export
            </button>
          </div>
        </div>
        <table className="tbl">
          <thead>
            <tr>
              <th style={{ width: 28 }}><span className="checkbox" /></th>
              <th>Filer</th>
              <th>Role</th>
              <th className="num">Jurisdictions</th>
              <th className="num">Records / yr</th>
              <th>Last filing</th>
              <th>Status</th>
              <th style={{ width: 40 }}></th>
            </tr>
          </thead>
          <tbody>
            {filers.map((f) => (
              <tr key={f.id}>
                <td><span className="checkbox" /></td>
                <td>
                  <div style={{ fontWeight: 500 }}>{f.name}</div>
                  <div className="mono muted" style={{ fontSize: 11 }}>{f.id}</div>
                </td>
                <td>{f.role}</td>
                <td className="num">{f.jurisCount}</td>
                <td className="num">{f.recordCount.toLocaleString()}</td>
                <td className="muted">{f.lastFile}</td>
                <td><Pill kind={f.status}>{f.statusLabel}</Pill></td>
                <td>
                  <button className="icon-btn" style={{ width: 28, height: 28 }}>
                    <I.more size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
