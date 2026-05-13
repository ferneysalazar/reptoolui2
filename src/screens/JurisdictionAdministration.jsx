import React from "react";
import { I } from "../icons.jsx";
import { Pill } from "../components/Pill.jsx";

export function JurisdictionAdministrationScreen() {
  const jurisdictions = [
    { code: "AI", name: "Anguilla", auth: "Inland Revenue Department", schema: "CRS XML v2.0", transport: "IRD Portal", lastSync: "06:00 UTC", status: "ok", filings: 18 },
    { code: "KY", name: "Cayman Islands", auth: "Tax Information Authority (TIA)", schema: "CRS XML v2.0 + FATCA v2.0", transport: "DITC Portal", lastSync: "06:00 UTC", status: "ok", filings: 26 },
    { code: "BM", name: "Bermuda", auth: "Ministry of Finance", schema: "CRS XML v2.0", transport: "AIA Portal", lastSync: "06:00 UTC", status: "ok", filings: 11 },
    { code: "JE", name: "Jersey", auth: "Revenue Jersey", schema: "CRS XML v2.0", transport: "AEOI Portal", lastSync: "06:00 UTC", status: "warn", filings: 8 },
    { code: "GG", name: "Guernsey", auth: "Revenue Service", schema: "CRS XML v2.0", transport: "IGOR", lastSync: "06:00 UTC", status: "ok", filings: 6 },
    { code: "SG", name: "Singapore", auth: "IRAS", schema: "CRS XML v2.0", transport: "myTax Portal API", lastSync: "06:15 UTC", status: "ok", filings: 14 },
    { code: "GB", name: "United Kingdom", auth: "HM Revenue & Customs", schema: "CRS XML v2.1.1", transport: "HMRC AEOI Gateway", lastSync: "Failed", status: "bad", filings: 4 },
    { code: "BS", name: "Bahamas", auth: "Competent Authority", schema: "CRS XML v2.0", transport: "AEOI Bahamas", lastSync: "06:00 UTC", status: "ok", filings: 7 },
  ];

  return (
    <div>
      <div className="page-head">
        <div>
          <h1 className="page-title">
            Jurisdiction <em>administration</em>
          </h1>
          <p className="page-sub">
            Reporting destinations the institution can transmit to. Per-jurisdiction schema versions, transport credentials, and acknowledgment workflows.
          </p>
        </div>
        <div className="page-actions">
          <button className="btn">
            <I.refresh size={14} />
            Sync schema registry
          </button>
          <button className="btn accent">
            <I.plus size={14} />
            Enable jurisdiction
          </button>
        </div>
      </div>

      <div className="stat-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        <div className="stat">
          <div className="label">
            <I.globe size={11} /> Enabled jurisdictions
          </div>
          <div className="value">
            38<span className="unit">/ 112</span>
          </div>
          <div className="delta">3 added in 2026</div>
        </div>
        <div className="stat">
          <div className="label">
            <I.bolt size={11} /> Schema packs current
          </div>
          <div className="value">
            36<span className="unit">/ 38</span>
          </div>
          <div className="delta down">2 require upgrade (HMRC, IRD-AI)</div>
        </div>
        <div className="stat">
          <div className="label">
            <I.shield size={11} /> Transport credentials valid
          </div>
          <div className="value">
            37<span className="unit">/ 38</span>
          </div>
          <div className="delta down">HMRC gateway pairing failed</div>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <div className="title">Active jurisdictions</div>
          <div className="hstack">
            <div className="search" style={{ width: 240 }}>
              <I.search size={14} />
              <input placeholder="Filter by code or authority…" />
            </div>
          </div>
        </div>
        <table className="tbl">
          <thead>
            <tr>
              <th>Code</th>
              <th>Jurisdiction</th>
              <th>Competent authority</th>
              <th>Schema</th>
              <th>Transport</th>
              <th>Last sync</th>
              <th className="num">Filings (yr)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {jurisdictions.map((j) => (
              <tr key={j.code}>
                <td>
                  <span className="mono" style={{ fontWeight: 600 }}>{j.code}</span>
                </td>
                <td>{j.name}</td>
                <td className="muted">{j.auth}</td>
                <td>
                  <span className="mono" style={{ fontSize: 12 }}>{j.schema}</span>
                </td>
                <td className="muted">{j.transport}</td>
                <td>
                  <span className="mono" style={{ fontSize: 12 }}>{j.lastSync}</span>
                </td>
                <td className="num">{j.filings}</td>
                <td>
                  <Pill kind={j.status}>
                    {j.status === "ok" ? "Healthy" : j.status === "warn" ? "Renewal" : "Failed"}
                  </Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
