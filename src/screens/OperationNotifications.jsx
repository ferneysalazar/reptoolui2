import React from "react";
import { I } from "../icons.jsx";
import { Pill } from "../components/Pill.jsx";

export function OperationNotificationsScreen() {
  const lanes = [
    {
      title: "Requires action",
      tint: "var(--bad)",
      items: [
        { t: "HMRC rejected FIL-2026-001135", who: "Ferney Salazar", when: "Today · 11:08", body: "Schema v2.0 submitted; v2.1.1 required. Re-stage the filing on the v2.1.1 pack and re-submit.", cta: "Re-stage filing" },
        { t: "1 missing TIN unresolved", who: "validation.engine", when: "Today · 09:46", body: "FIL-2026-001142 · holder 'GS Trust 0042'. Manual remediation expected.", cta: "Resolve record" },
      ],
    },
    {
      title: "In progress",
      tint: "var(--warn)",
      items: [
        { t: "Bermuda transmission queued", who: "transport.layer", when: "Today · 13:11", body: "FIL-2026-001138 awaiting hourly window. Estimated dispatch in 23 min.", cta: "View queue" },
        { t: "Jersey credentials renewal", who: "FIRE Reporting Tool.platform", when: "Mar 01 · 06:00", body: "Renewal window opens 15 Mar 2026. Approver: Marina Sokolova.", cta: "Open ticket" },
      ],
    },
    {
      title: "Acknowledged",
      tint: "var(--ok)",
      items: [
        { t: "Cayman TIA accepted FIL-2026-001141", who: "Cayman TIA", when: "Today · 14:02", body: "1,248 records accepted. Receipt #KY-AC-220041.", cta: "View receipt" },
        { t: "Schema pack v2.6.0 deployed", who: "system.scheduler", when: "Mar 02 · 09:30", body: "Applied to 36 jurisdictions. No downstream regressions.", cta: "Diff" },
        { t: "Q1 close prepared", who: "p.huang", when: "Mar 02 · 08:55", body: "142 filings staged for review. Average readiness 94%.", cta: "Review batch" },
      ],
    },
  ];

  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">
            Operation <em>notifications</em>
          </h1>
          <p className="page-sub">
            A live workboard of what's pending, in motion, and complete. Items move left-to-right as their status changes.
          </p>
        </div>
        <div className="page-actions">
          <div className="hstack">
            <Pill kind="bad">2 require action</Pill>
            <Pill kind="warn">2 in progress</Pill>
            <Pill kind="ok">3 acknowledged</Pill>
          </div>
          <button className="btn">
            <I.bell size={14} />
            Notification rules
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {lanes.map((lane, i) => (
          <div key={i} className="card" style={{ background: "var(--panel)" }}>
            <div className="card-head">
              <div className="title">
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 8,
                    background: lane.tint,
                    display: "inline-block",
                  }}
                />
                {lane.title}
                <span className="muted" style={{ fontWeight: 400 }}>
                  · {lane.items.length}
                </span>
              </div>
              <button className="icon-btn" style={{ width: 24, height: 24 }}>
                <I.more size={14} />
              </button>
            </div>
            <div
              className="card-body"
              style={{ display: "flex", flexDirection: "column", gap: 10, padding: 12 }}
            >
              {lane.items.map((it, j) => (
                <div
                  key={j}
                  style={{
                    background: "var(--panel-2)",
                    border: "1px solid var(--line)",
                    borderRadius: 10,
                    padding: 14,
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{it.t}</div>
                  <div
                    className="muted"
                    style={{
                      fontSize: 12,
                      marginTop: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span className="mono">{it.who}</span> · <span>{it.when}</span>
                  </div>
                  <div
                    style={{ fontSize: 12.5, marginTop: 8, color: "var(--ink-2)" }}
                  >
                    {it.body}
                  </div>
                  <div
                    style={{
                      marginTop: 12,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <button className="btn sm">
                      {it.cta}
                      <I.chevR size={11} />
                    </button>
                    <button className="btn sm ghost">
                      <I.more size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
