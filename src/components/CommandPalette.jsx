import React, { useEffect, useRef, useState } from "react";
import { I } from "../icons.jsx";

export function CommandPalette({ onClose, go }) {
  const [q, setQ] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const items = [
    { group: "Navigate", id: "dashboard", label: "Dashboard", meta: "G D" },
    { group: "Navigate", id: "institution", label: "Institution verification", meta: "G I" },
    { group: "Navigate", id: "filers", label: "Filer administration", meta: "G F" },
    { group: "Navigate", id: "jurisdictions", label: "Jurisdiction administration", meta: "G J" },
    { group: "Navigate", id: "events", label: "Events", meta: "G E" },
    { group: "Navigate", id: "ops", label: "Operation notifications", meta: "G N" },
    { group: "Actions", id: "_newfiling", label: "Start a new filing", meta: "⌘ ⇧ N" },
    { group: "Actions", id: "_import", label: "Import XML…", meta: "⌘ I" },
    { group: "Actions", id: "_export", label: "Export current view as CSV", meta: "⌘ ⇧ E" },
  ];

  const filtered = q
    ? items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()))
    : items;
  const grouped = filtered.reduce((acc, it) => {
    (acc[it.group] ||= []).push(it);
    return acc;
  }, {});

  return (
    <div className="scrim" onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()}>
        <div className="cmdk-input">
          <I.search size={16} />
          <input
            ref={inputRef}
            placeholder="Type a command, or jump to…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <kbd className="kbd-mono">esc</kbd>
        </div>
        <div className="cmdk-list">
          {Object.entries(grouped).map(([g, list]) => (
            <React.Fragment key={g}>
              <div className="group">{g}</div>
              {list.map((it) => (
                <div
                  key={it.id}
                  className="item"
                  onClick={() => {
                    if (!it.id.startsWith("_")) go(it.id);
                    else onClose();
                  }}
                >
                  {it.group === "Navigate" ? <I.panel size={14} /> : <I.bolt size={14} />}
                  <span>{it.label}</span>
                  <span className="meta">{it.meta}</span>
                </div>
              ))}
            </React.Fragment>
          ))}
          {filtered.length === 0 && (
            <div
              style={{
                padding: "24px 12px",
                textAlign: "center",
                color: "var(--ink-3)",
                fontSize: 13,
              }}
            >
              No matches
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
