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
  onToggleMobile,
  mobileOpen,
}) {
  const copyRightText = "FATCA/CRS Reporting Tool© Version 2.0.01. All rights reserved 2026 OPES Software Inc."

  return (
    <div className="topbar">
      <button className="hamburger-btn" onClick={onToggleMobile} title="Menu">
        <I.menu size={20} />
      </button>

      <div className="brand">
        <div className="brand-mark">
          <img style={{ height: "30px" }} src="/src/assets/opes-logo-only.png" alt="Opes logo" title={copyRightText} />
        </div>
        {!collapsed && (
          <div
            id="brandName"
            className="brand-name"
            title={copyRightText}
          >
            <div style={{ paddingLeft: "4px" }}>
              <p className="brand-product">FIRE Reporting Tool<span style={{fontSize:"12px"}}> ©</span></p>
              <p className="brand-ver">2.0.01</p>
            </div>
          </div>
        )}
      </div>

      <div className="topbar-mid">
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
            title="Ferney Salazar"
          >
            FS
          </button>
          {showUser && (
            <div className="popover" style={{ top: 44, right: 0, width: 260 }}>
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>Ferney Salazar</div>
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
