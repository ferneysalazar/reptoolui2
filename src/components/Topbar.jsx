import React from "react";
import { I } from "../icons.jsx";
import { INSTITUTIONS, YEARS } from "../data/nav.js";

export function Topbar({
  crumbs,
  collapsed,
  institution,
  setInstitution,
  year,
  setYear,
  showInst,
  setShowInst,
  showYear,
  setShowYear,
  showUser,
  setShowUser,
  onOpenCmd,
  onOpenOps,
}) {
  return (
    <div className="topbar">
      <div className="brand">
        <div className="brand-mark"><img style={{ height: "30px" }} src="/src/assets/opes-logo-only.png" alt="Opes logo" title="OPES FATCA/CRS Reporting Tool Version 2.0.01"/></div>
        {!collapsed && (
          <>
            <div className="brand-name" title="OPES FATCA/CRS Reporting Tool Version 2.0.01">
              <div style={{ paddingLeft: "12px" }} >
                <p className="brand-product">Reporting Tool</p>
                <p className="brand-ver">2.0.01</p>
              </div>
            </div>
            
          </>
        )}
      </div>

      <div className="topbar-mid">
        <div className="crumbs">
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <I.chevR size={12} className="sep" />}
              <span className={i === crumbs.length - 1 ? "here" : ""}>{c}</span>
            </React.Fragment>
          ))}
        </div>
        {/* <div style={{ marginLeft: 24 }}>
          <button
            className="search"
            onClick={onOpenCmd}
            style={{ cursor: "pointer" }}
          >
            <I.search size={14} />
            <span className="dim" style={{ flex: 1, textAlign: "left" }}>
              Search filings, filers, jurisdictions…
            </span>
            <kbd>⌘K</kbd>
          </button>
        </div> */}
      </div>

      <div className="topbar-right">
        {/* Institution */}
        <div style={{ position: "relative" }} data-popover-root>
          <button
            className="context-pill"
            onClick={(e) => {
              e.stopPropagation();
              setShowInst((v) => !v);
              setShowYear(false);
              setShowUser(false);
            }}
          >
            <I.building size={14} />
            <span className="label">Institution</span>
            <span
              className="val"
              style={{
                maxWidth: 260,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {institution}
            </span>
            <I.chev size={14} />
          </button>
          {showInst && (
            <div className="popover" style={{ top: 44, right: 0, width: 340 }}>
              <div className="group-label">Opes Inc. International Group</div>
              {INSTITUTIONS.map((i) => (
                <div
                  key={i}
                  className={`item ${i === institution ? "active" : ""}`}
                  onClick={() => {
                    setInstitution(i);
                    setShowInst(false);
                  }}
                >
                  <I.building size={14} />
                  <span>{i}</span>
                  {i === institution && <I.check size={14} className="check" />}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Year */}
        <div style={{ position: "relative" }} data-popover-root>
          <button
            className="context-pill"
            onClick={(e) => {
              e.stopPropagation();
              setShowYear((v) => !v);
              setShowInst(false);
              setShowUser(false);
            }}
          >
            <I.calendar size={14} />
            <span className="label">Year</span>
            <span className="val">{year}</span>
            <I.chev size={14} />
          </button>
          {showYear && (
            <div className="popover" style={{ top: 44, right: 0, width: 180 }}>
              <div className="group-label">Reporting period</div>
              {YEARS.map((y) => (
                <div
                  key={y}
                  className={`item ${y === year ? "active" : ""}`}
                  onClick={() => {
                    setYear(y);
                    setShowYear(false);
                  }}
                >
                  <I.calendar size={14} />
                  <span>{y}</span>
                  {y === year && <I.check size={14} className="check" />}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="icon-btn" title="Notifications" onClick={onOpenOps}>
          <I.bell size={16} />
          <span className="dot" />
        </button>

        <div style={{ position: "relative" }} data-popover-root>
          <button
            className="avatar"
            onClick={(e) => {
              e.stopPropagation();
              setShowUser((v) => !v);
              setShowInst(false);
              setShowYear(false);
            }}
            title="Mira Adesanya"
          >
            MA
          </button>
          {showUser && (
            <div className="popover" style={{ top: 44, right: 0, width: 260 }}>
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>Mira Adesanya</div>
                <div className="muted" style={{ fontSize: 12 }}>
                  Compliance Lead · OPES Inc
                </div>
              </div>
              <div className="divider" />
              <div className="item">
                <I.user size={14} />
                Profile
              </div>
              <div className="item">
                <I.config size={14} />
                Preferences
              </div>
              <div className="item">
                <I.shield size={14} />
                Security & MFA
              </div>
              <div className="divider" />
              <div className="item">
                <I.logout size={14} />
                Sign out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
