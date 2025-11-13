import React from "react";
import "./CallDetailsView.css";

const CallDetailsView: React.FC = () => {
  return (
    <div className="lc-root">
      {/* Left vertical icon bar */}
      <aside className="lc-nav-rail">
        <div className="lc-nav-logo">MA</div>

        <button className="lc-nav-icon active" aria-label="Activity">
          ●
        </button>
        <button className="lc-nav-icon" aria-label="Reports">
          ●
        </button>
        <button className="lc-nav-icon" aria-label="Messages">
          ●
        </button>
        <button className="lc-nav-icon" aria-label="Integrations">
          ●
        </button>
        <button className="lc-nav-icon" aria-label="Settings">
          ●
        </button>
      </aside>

      {/* Main column */}
      <div className="lc-main">
        {/* Top bar with logo + tabs */}
        <header className="lc-topbar">
          <div className="lc-brand">
            <span className="lc-brand-main">Call</span>
            <span className="lc-brand-sub">Center</span>
          </div>

          <div className="lc-topbar-tabs">
            <button className="lc-tab lc-tab--active">Agent View</button>
            <button className="lc-tab">Team View</button>
          </div>

          <div className="lc-topbar-right">
            <button className="lc-circle-btn" aria-label="Help">
              ?
            </button>
            <button className="lc-circle-btn" aria-label="Notifications">
              🔔
            </button>
          </div>
        </header>

        {/* 3-column layout */}
        <div className="lc-layout">
          {/* LEFT: call list */}
          <section className="lc-call-list">
            {/* Header: agent + dialer */}
            <div className="lc-call-list-header">
              <button className="lc-pill lc-pill--agent">Anna</button>
              <button className="lc-pill lc-pill--outline">Dialer</button>
            </div>

            {/* Filters row */}
            <div className="lc-call-list-filters">
              <button className="lc-icon-btn">🔍</button>
              <button className="lc-icon-btn">⚙️</button>
              <button className="lc-dropdown">
                All Items <span>▾</span>
              </button>
            </div>

            {/* Sections */}
            <div className="lc-call-list-section">
              <div className="lc-call-list-section-title">Active</div>
              <div className="lc-empty-row">—</div>
            </div>

            <div className="lc-call-list-section">
              <div className="lc-call-list-section-title">Reviewed</div>

              {/* Example call row – Parviz (selected) */}
              <button className="lc-call-row lc-call-row--selected">
                <div className="lc-call-icon inbound">⬅︎</div>
                <div className="lc-call-row-main">
                  <div className="lc-call-name">Parviz Sahbaee</div>
                  <div className="lc-call-meta">408-482-6550</div>
                </div>
                <div className="lc-call-time">5:33 pm</div>
              </button>

              {/* Some more dummy rows */}
              <button className="lc-call-row">
                <div className="lc-call-icon inbound">⬅︎</div>
                <div className="lc-call-row-main">
                  <div className="lc-call-name">Mom Saghebchi</div>
                  <div className="lc-call-meta">408-887-6191</div>
                </div>
                <div className="lc-call-time">5:16 pm</div>
              </button>

              <button className="lc-call-row">
                <div className="lc-call-icon inbound">⬅︎</div>
                <div className="lc-call-row-main">
                  <div className="lc-call-name">Anaheim Ca</div>
                  <div className="lc-call-meta">714-329-2005</div>
                </div>
                <div className="lc-call-time">4:42 pm</div>
              </button>
            </div>
          </section>

          {/* CENTER: call details */}
          <section className="lc-call-details">
            {/* Contact name */}
            <div className="lc-call-details-header">
              <h1 className="lc-call-title">Parviz Sahbaee</h1>
              <div className="lc-call-icons">
                <button className="lc-circle-btn" aria-label="Thumbs up">
                  👍
                </button>
                <button className="lc-circle-btn" aria-label="Flag">
                  🚩
                </button>
                <button className="lc-circle-btn" aria-label="Call options">
                  ☰
                </button>
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="lc-call-subtitle">Inbound recorded call</h2>

            {/* Interaction details */}
            <section className="lc-section">
              <div className="lc-section-header">
                <span className="lc-section-title">Interaction details</span>
              </div>
              <div className="lc-details-grid">
                <div>
                  <div className="lc-detail-label">Date</div>
                  <div className="lc-detail-value">Nov 12 5:33pm</div>
                </div>
                <div>
                  <div className="lc-detail-label">Tracking number</div>
                  <div className="lc-detail-value">
                    Lead.Gen / AMJ Marketing / Main Area 669-201-9880
                  </div>
                </div>
                <div>
                  <div className="lc-detail-label">Duration</div>
                  <div className="lc-detail-value">9m 27s</div>
                </div>
                <div>
                  <div className="lc-detail-label">Agent</div>
                  <div className="lc-detail-value">Natalia MA</div>
                </div>
                <div>
                  <div className="lc-detail-label">Source</div>
                  <div className="lc-detail-value">Direct</div>
                </div>
              </div>
            </section>

            {/* Classification */}
            <section className="lc-section">
              <div className="lc-section-header">
                <span className="lc-section-title">Classification</span>
                <span className="lc-help-icon">?</span>
              </div>
              <div className="lc-tags-row">
                <span className="lc-tag lc-tag--green">
                  Non-Visited Cx: Booked ✕
                </span>
                <button className="lc-icon-btn">＋</button>
              </div>
            </section>

            {/* Waveform + controls */}
            <section className="lc-section">
              <div className="lc-waveform">
                {/* Just a fake waveform for now */}
                {Array.from({ length: 120 }).map((_, i) => (
                  <div
                    key={i}
                    className="lc-wave-bar"
                    style={{
                      height: `${20 + (Math.sin(i / 5) + 1) * 20}px`,
                    }}
                  />
                ))}
              </div>
              <div className="lc-audio-controls">
                <button className="lc-pill">◀︎◀︎</button>
                <button className="lc-pill">▶︎</button>
                <button className="lc-pill">1x</button>
                <span className="lc-timestamp">00:00</span>
                <button className="lc-link-btn">Download MP3</button>
              </div>
            </section>

            {/* Transcript */}
            <section className="lc-section">
              <h3 className="lc-section-title">Transcript</h3>
              <div className="lc-transcript-language">
                This transcript is in: <strong>Language Unavailable</strong>
              </div>
              <div className="lc-transcript-box">
                <p>
                  <strong>Natalie:</strong> Hello, this is Natalie. How may I
                  help you?
                </p>
              </div>
            </section>
          </section>

          {/* RIGHT: lead details */}
          <aside className="lc-lead-panel">
            <div className="lc-lead-card">
              <div className="lc-lead-header">
                <div className="lc-lead-title">Lead details</div>
                <button className="lc-icon-btn">✕</button>
              </div>

              <div className="lc-lead-contact">
                <div className="lc-lead-name">
                  Parviz Sahbaee <span className="lc-lead-thumb">👍</span>
                </div>
                <div className="lc-lead-phone">408-482-6550</div>
                <div className="lc-lead-location">San Jose West, CA</div>
              </div>

              <div className="lc-lead-section">
                <div className="lc-detail-label">Classification status</div>
                <div className="lc-detail-value">Nov 12, 2025</div>
              </div>

              <div className="lc-lead-section">
                <div className="lc-detail-label">Tags</div>
                <span className="lc-tag lc-tag--green">
                  Non-Visited Cx: Booked
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CallDetailsView;
