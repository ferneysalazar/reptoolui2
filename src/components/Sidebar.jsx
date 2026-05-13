import React from "react";
import { I } from "../icons.jsx";
import { NAV } from "../data/nav.js";

export function Sidebar({
  active,
  goTo,
  openGroup,
  setOpenGroup,
  collapsed,
  setCollapsed,
  onItemEnter,
  onItemLeave,
}) {
  return (
    <nav className="sidebar">
      <button
        className="collapse-toggle"
        onClick={() => setCollapsed((c) => !c)}
        title="Toggle sidebar"
      >
        {collapsed ? <I.chevR size={11} /> : <I.chevL size={11} />}
      </button>

      {NAV.map((sec, si) => (
        <React.Fragment key={si}>
          <div className="side-section-label">{sec.section}</div>
          <div className="side-group">
            {sec.items.map((it) => {
              const Ico = I[it.icon];
              const isActive =
                it.id === active || it.children?.some((c) => c.id === active);

              if (it.children) {
                const expanded = openGroup === it.id;
                return (
                  <React.Fragment key={it.id}>
                    <div
                      className={`side-item ${isActive ? "active" : ""}`}
                      onMouseEnter={onItemEnter}
                      onMouseLeave={onItemLeave}
                      onClick={() => setOpenGroup(expanded ? null : it.id)}
                    >
                      <span className="icon">{Ico && <Ico size={17} />}</span>
                      <span className="label">{it.label}</span>
                      <span
                        className="chev"
                        style={{
                          marginLeft: "auto",
                          transform: expanded ? "rotate(180deg)" : "none",
                          transition: "transform .15s",
                          color: "oklch(55% 0.01 250)",
                        }}
                      >
                        <I.chev size={12} />
                      </span>
                    </div>
                    {expanded && (
                      <div className="side-sub">
                        {it.children.map((c) => (
                          <div
                            key={c.id}
                            className={`side-sub-item ${active === c.id ? "active" : ""}`}
                            onClick={() => goTo(c.id)}
                          >
                            {c.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                );
              }

              return (
                <div
                  key={it.id}
                  className={`side-item ${isActive ? "active" : ""}`}
                  onMouseEnter={onItemEnter}
                  onMouseLeave={onItemLeave}
                  onClick={() => goTo(it.id)}
                >
                  <span className="icon">{Ico && <Ico size={17} />}</span>
                  <span className="label">{it.label}</span>
                  {it.badge && <span className="badge">{it.badge}</span>}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ))}

      <div className="side-foot">
        <div className="side-item">
          <span className="icon">
            <I.book size={17} />
          </span>
          <span className="label">Help & docs</span>
        </div>
      </div>
    </nav>
  );
}
