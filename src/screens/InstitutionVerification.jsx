import React from "react";
import { I } from "../icons.jsx";
import { Pill } from "../components/Pill.jsx";

export function InstitutionVerificationScreen() {
  const inst = {
    name: "Opes Inc. International Bank (Anguilla) Ltd. — Branch 1",
    legalName: "Opes Inc. International Bank Limited",
    fiId: "AI.00193.00001",
    giin: "ABC123.00001.BR.660",
    crsStatus: "Reporting Financial Institution",
    fatcaStatus: "Participating FI (Model 1 IGA)",
    incorporated: "Anguilla, BWI",
    address: "Mariners Way, The Valley, AI-2640, Anguilla",
    contact: "Ferney Salazar · compliance.lead@OPES Inc.co",
    lei: "549300H8JZQX5K9Z3F22",
  };

  const checks = [
    { label: "GIIN format and IRS registry match", status: "ok", desc: "Last verified 04 Mar 2026 against the IRS FFI list" },
    { label: "Filer-FI relationship attestation", status: "ok", desc: "Power of attorney on file (expires 2027-12-31)" },
    { label: "Self-certification — controlling persons", status: "warn", desc: "2 records require beneficial owner refresh" },
    { label: "Local tax authority registration (AI)", status: "ok", desc: "Permit IRN-AI-22-0091 on file" },
    { label: "Local tax authority registration (KY)", status: "ok", desc: "TIA portal pairing confirmed" },
    { label: "Sanctioned counterparty screening", status: "info", desc: "Daily delta-check, last run 06:00 UTC" },
    { label: "Notification of significant change", status: "bad", desc: "Address change submitted 28 Feb 2026 — awaiting acknowledgment" },
  ];

  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">
            Institution <em>verification</em>
          </h1>
          <p className="page-sub">
            Confirms the identity, registration, and reporting status of the financial institution before any filing leaves the system.
          </p>
        </div>
        <div className="page-actions">
          <button className="btn">
            <I.refresh size={14} />
            Re-run all checks
          </button>
          <button className="btn primary">
            <I.check size={14} />
            Mark verified
          </button>
        </div>
      </div>

      <div className="cols" style={{ gridTemplateColumns: "1fr 380px" }}>
        <div className="card">
          <div className="card-head">
            <div className="title">
              <I.building size={16} /> Entity profile
            </div>
            <span className="mono muted" style={{ fontSize: 11 }}>
              FI-ID {inst.fiId}
            </span>
          </div>
          <div className="card-body">
            <dl className="detail-grid">
              <dt>Display name</dt><dd>{inst.name}</dd>
              <dt>Legal name</dt><dd>{inst.legalName}</dd>
              <dt>GIIN</dt><dd className="mono">{inst.giin}</dd>
              <dt>LEI</dt><dd className="mono">{inst.lei}</dd>
              <dt>Jurisdiction</dt><dd>{inst.incorporated}</dd>
              <dt>Registered address</dt><dd>{inst.address}</dd>
              <dt>CRS classification</dt><dd><Pill kind="accent">{inst.crsStatus}</Pill></dd>
              <dt>FATCA classification</dt><dd><Pill kind="accent">{inst.fatcaStatus}</Pill></dd>
              <dt>Primary contact</dt><dd>{inst.contact}</dd>
            </dl>
          </div>
          <div className="card-foot">
            <span className="muted" style={{ fontSize: 12 }}>
              Updated by Marina Sokolova · 02 Mar 2026, 14:02 UTC
            </span>
            <button className="btn sm ghost">
              Audit log
              <I.chevR size={12} />
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <div className="title">Verification checks</div>
            <Pill kind="warn">2 attention</Pill>
          </div>
          <div className="card-body" style={{ padding: 0 }}>
            {checks.map((c, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "22px 1fr",
                  gap: 12,
                  padding: "14px 18px",
                  borderBottom: i < checks.length - 1 ? "1px solid var(--line)" : 0,
                }}
              >
                <div className={`tl-node ${c.status}`} style={{ margin: 0 }}>
                  {c.status === "ok" && <I.check size={11} stroke={2.5} />}
                  {c.status === "warn" && <I.alert size={11} stroke={2} />}
                  {c.status === "bad" && <I.x size={11} stroke={2.5} />}
                  {c.status === "info" && <I.dot size={11} />}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{c.label}</div>
                  <div className="muted" style={{ fontSize: 12, marginTop: 2 }}>
                    {c.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
