import React, { useEffect, useRef, useState } from "react";
import { NAV, INSTITUTIONS, YEARS } from "./data/nav.js";
import { Topbar } from "./components/Topbar.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { CommandPalette } from "./components/CommandPalette.jsx";
import { DashboardScreen } from "./screens/Dashboard.jsx";
import { InstitutionVerificationScreen } from "./screens/InstitutionVerification.jsx";
import { FilerAdministrationScreen } from "./screens/FilerAdministration.jsx";
import { JurisdictionAdministrationScreen } from "./screens/JurisdictionAdministration.jsx";
import { EventsScreen } from "./screens/Events.jsx";
import { OperationNotificationsScreen } from "./screens/OperationNotifications.jsx";
import { PlaceholderScreen } from "./screens/Placeholder.jsx";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [openGroup, setOpenGroup] = useState("config");
  const [collapsed, setCollapsed] = useState(false);
  const [institution, setInstitution] = useState(INSTITUTIONS[0]);
  const [year, setYear] = useState(YEARS[0]);
  const [showInst, setShowInst] = useState(false);
  const [showYear, setShowYear] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Hover-to-expand when collapsed (3s dwell)
  const hoverTimerRef = useRef(null);
  const onItemEnter = () => {
    if (!collapsed) return;
    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => setCollapsed(false), 1100);
  };
  const onItemLeave = () => {
    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = null;
  };
  useEffect(() => () => clearTimeout(hoverTimerRef.current), []);

  // ⌘K / Ctrl+K to open command palette, Esc to close
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen(true);
      }
      if (e.key === "Escape") setCmdOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // close popovers on outside click
  useEffect(() => {
    const onDown = (e) => {
      if (!e.target.closest?.("[data-popover-root]")) {
        setShowInst(false);
        setShowYear(false);
        setShowUser(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const goTo = (id) => {
    setActive(id);
    setMobileOpen(false);
    const parent = NAV.flatMap((s) => s.items).find((it) =>
      it.children?.some((c) => c.id === id)
    );
    if (parent) setOpenGroup(parent.id);
  };

  const currentScreen = () => {
    switch (active) {
      case "dashboard":
        return <DashboardScreen ctx={{ institution, year }} go={goTo} />;
      case "institution":
        return <InstitutionVerificationScreen ctx={{ institution, year }} />;
      case "filers":
        return <FilerAdministrationScreen />;
      case "jurisdictions":
        return <JurisdictionAdministrationScreen />;
      case "events":
        return <EventsScreen />;
      case "ops":
        return <OperationNotificationsScreen />;
      default:
        return <PlaceholderScreen id={active} />;
    }
  };

  // Build breadcrumbs from the active id
  const crumbs = (() => {
    for (const sec of NAV) {
      for (const it of sec.items) {
        if (it.id === active) return [sec.section, it.label];
        if (it.children) {
          const c = it.children.find((c) => c.id === active);
          if (c) return [sec.section, it.label, c.label];
        }
      }
    }
    return [];
  })();

  return (
    <div
      className={`app ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}
      data-screen-label={`FIRE Reporting Tool / ${crumbs.join(" / ")}`}
    >
      <Topbar
        crumbs={crumbs}
        collapsed={collapsed}
        institution={institution}
        setInstitution={setInstitution}
        year={year}
        setYear={setYear}
        showInst={showInst}
        setShowInst={setShowInst}
        showYear={showYear}
        setShowYear={setShowYear}
        showUser={showUser}
        setShowUser={setShowUser}
        onOpenCmd={() => setCmdOpen(true)}
        onOpenOps={() => goTo("ops")}
        onToggleMobile={() => setMobileOpen((v) => !v)}
        mobileOpen={mobileOpen}
      />

      <Sidebar
        active={active}
        goTo={goTo}
        openGroup={openGroup}
        setOpenGroup={setOpenGroup}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        onItemEnter={onItemEnter}
        onItemLeave={onItemLeave}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="main">
        <div className="main-inner">{currentScreen()}</div>
      </main>

      {cmdOpen && (
        <CommandPalette
          onClose={() => setCmdOpen(false)}
          go={(id) => {
            goTo(id);
            setCmdOpen(false);
          }}
        />
      )}
    </div>
  );
}
