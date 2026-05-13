import React, { useState } from "react";

export function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => onLogin(), 900);
  };

  return (
    <div className="lp">
      {/* ── Left panel ── */}
      <div className="lp-left">
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />
        <div className="lp-orb lp-orb-3" />
        <div className="lp-mesh" />

        <div className="lp-left-body">
          {/* Hero */}
          <div className="lp-hero">
            <h1 className="lp-h1">
              FATCA / CRS<br />
              <em>Reporting Tool</em>
            </h1>
            <p className="lp-tagline">
              Regulatory compliance, simplified for financial institutions operating across borders.
            </p>
          </div>

          {/* Feature list */}
          <ul className="lp-features">
            <li>
              <span className="lp-check">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="lp-feat-title">Multi-jurisdiction reporting</div>
                <div className="lp-feat-desc">FATCA &amp; CRS compliance across 100+ jurisdictions</div>
              </div>
            </li>
            <li>
              <span className="lp-check">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="lp-feat-title">Institution administration</div>
                <div className="lp-feat-desc">Centralised filer management and verification workflows</div>
              </div>
            </li>
            <li>
              <span className="lp-check">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <div className="lp-feat-title">Real-time event monitoring</div>
                <div className="lp-feat-desc">Full audit trail with operational notifications</div>
              </div>
            </li>
          </ul>

          {/* Version badge */}
          <div className="lp-ver-badge">v 2.0.01</div>
        </div>

        <div className="lp-left-foot">
          © 2026 OPES Software Inc. All rights reserved.
        </div>
      </div>

      {/* ── Right panel ── */}
      <div className="lp-right">
        <div className="lp-right-wrap">
          <img src="/src/assets/opes-logo.png" alt="OPES Software" className="lp-card-logo" />

        <div className="lp-card">
          {/* Top accent bar */}
          <div className="lp-card-bar" />

          <div className="lp-card-inner">

            <div className="lp-form-head">
              <h2 className="lp-form-title">Welcome back</h2>
              <p className="lp-form-sub">Sign in to your compliance workspace</p>
            </div>

            <form className="lp-form" onSubmit={handleSubmit} autoComplete="on">
              <div className="lp-field">
                <label htmlFor="lp-email">Email address</label>
                <div className="lp-input-wrap">
                  <svg className="lp-input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                  <input
                    id="lp-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@institution.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="lp-field">
                <label htmlFor="lp-password" style={{ display: "flex", justifyContent: "space-between" }}>
                  Password
                  <a href="#" className="lp-forgot" onClick={(e) => e.preventDefault()}>
                    Forgot password?
                  </a>
                </label>
                <div className="lp-input-wrap">
                  <svg className="lp-input-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input
                    id="lp-password"
                    type={showPass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="lp-eye"
                    onClick={() => setShowPass((v) => !v)}
                    tabIndex={-1}
                    aria-label={showPass ? "Hide password" : "Show password"}
                  >
                    {showPass ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <button className="lp-submit" type="submit" disabled={loading}>
                {loading ? (
                  <span className="lp-spinner" />
                ) : (
                  <>
                    Sign in
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="lp-divider">
              <span> · Secure access · </span>
            </div>

            <div className="lp-footer-brand">
              <img src="/src/assets/opes-logo-only.png" alt="" className="lp-footer-logo" />
              <span>Powered by OPES Software Inc.</span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
