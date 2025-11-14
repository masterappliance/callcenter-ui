// src/components/icons/SoftIcons.jsx

/*
  Soft rounded icon set — single consistent style

  - 24x24 viewBox
  - strokeWidth 1.6
  - round caps & joins
  - currentColor so Tailwind can color it
*/

/* ───────────── CALL STATUS ICONS ───────────── */

// Inbound / answered call (green)
export function IconCallInbound() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* handset */}
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      {/* arrow in (down-left) */}
      <path d="M11 13H7" />
      <path d="M7 13V9" />
      <path d="M11 9 7 13" />
    </svg>
  );
}

// Outbound call (blue)
export function IconCallOutbound() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* handset */}
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      {/* arrow out (up-right) */}
      <path d="M13 7h4" />
      <path d="M17 7v4" />
      <path d="M13 11l4-4" />
    </svg>
  );
}

// Missed call (red, X)
export function IconCallMissed() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* handset */}
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      {/* X mark */}
      <path d="M14.5 4.5l3 3" />
      <path d="M17.5 4.5l-3 3" />
    </svg>
  );
}

// Abandoned call (grey, arrow straight down)
export function IconCallAbandoned() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* handset */}
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      {/* arrow down */}
      <path d="M12 4v5.5" />
      <path d="M10.5 8.5 12 10l1.5-1.5" />
    </svg>
  );
}

/* ───────────── MESSAGE / VOICEMAIL / SEARCH ───────────── */

export function IconSms() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-3 3v-3" />
      <path d="M9 9h6M9 12h4" />
    </svg>
  );
}

export function IconVoicemail() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="12" r="3" />
      <circle cx="16" cy="12" r="3" />
      <path d="M8 15h8" />
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="5" />
      <path d="M15.5 15.5L19 19" />
    </svg>
  );
}

/* ───────────── STATUS / ACTION ICONS ───────────── */

export function IconWarning() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4 4 18h16L12 4z" />
      <path d="M12 10v4" />
      <path d="M12 16.5h.01" />
    </svg>
  );
}

export function IconMic() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M12 14v4" />
      <path d="M8 18h8" />
    </svg>
  );
}

export function IconTransfer() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7h8" />
      <path d="M13 7 9 3" />
      <path d="M13 7 9 11" />
      <path d="M19 17h-8" />
      <path d="M11 17 15 13" />
      <path d="M11 17 15 21" />
    </svg>
  );
}

export function IconMessage() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-4 4v-4" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </svg>
  );
}

export function IconHangup() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 15c2-2 4-3 6-3s4 1 6 3" />
      <path d="M6 15h3" />
      <path d="M15 15h3" />
    </svg>
  );
}

/* ───────────── CLASSIFICATION ICONS ───────────── */

export function IconTag() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7V4h3l9 9-3 3L4 7z" />
      <circle cx="7" cy="7" r="1.3" />
    </svg>
  );
}

export function IconDollar() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M9 7c0-1.5 1.4-2.5 3-2.5s3 1 3 2.5S14 10 12 10s-3 1.1-3 2.5S10.4 15 12 15s3-1 3-2.5" />
    </svg>
  );
}

export function IconNote() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="5" y="4" width="12" height="16" rx="2" />
      <path d="M9 9h6" />
      <path d="M9 12h6" />
      <path d="M9 15h3" />
    </svg>
  );
}
