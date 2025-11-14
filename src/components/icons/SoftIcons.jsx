// src/components/icons/SoftIcons.jsx

/*
  Soft Outline Icon Pack — Style A
  All icons use:
  - 24x24 viewBox
  - strokeWidth 1.5
  - round caps & joins
  - currentColor for Tailwind styling
*/

/* ───────────────────────────── */
/* CALL TYPE ICONS               */
/* ───────────────────────────── */

// Grey handset + arrow down (ABANDONED)
export function IconAbandoned() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      <path d="M12 4v5.5" />
      <path d="M10.5 8.5 12 10l1.5-1.5" />
    </svg>
  );
}

// Blue handset + arrow up-right (OUTBOUND)
export function IconOutbound() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      <path d="M13 7h4" />
      <path d="M17 7v4" />
      <path d="M13 11l4-4" />
    </svg>
  );
}

// Green handset + arrow down-left (ANSWERED)
export function IconAnswered() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      <path d="M11 13H7" />
      <path d="M7 13V9" />
      <path d="M11 9 7 13" />
    </svg>
  );
}

// Red handset + X (MISSED)
export function IconMissed() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 5.5c.4-.4 1-.4 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c.8 1.7 2.1 3 3.8 3.8l.7-.7a1 1 0 0 1 1.4 0l1.4 1.4a1 1 0 0 1 0 1.4l-.7.7c-.7.7-1.8.9-2.7.5-2.4-1-4.7-3.2-5.7-5.7-.4-.9-.2-2 .5-2.7l.7-.7z" />
      <path d="M14.5 4.5l3 3" />
      <path d="M17.5 4.5l-3 3" />
    </svg>
  );
}

/* Alias used by InteractionsPanel (inbound call icon) */
export function IconCallInbound() {
  return <IconAnswered />;
}

/* ───────────────────────────── */
/* MESSAGE / VOICEMAIL ICONS     */
/* ───────────────────────────── */

export function IconSms() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="12" r="3" />
      <circle cx="16" cy="12" r="3" />
      <path d="M8 15h8" />
    </svg>
  );
}

/* ───────────────────────────── */
/* STATUS / ACTION ICONS         */
/* ───────────────────────────── */

export function IconWarning() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4l8 14H4l8-14z" />
      <path d="M12 10v4M12 16h.01" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M12 14v4M8 18h8" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7h8m0 0L9 3m4 4L9 11" />
      <path d="M19 17h-8m0 0 4 4m-4-4 4-4" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4v-4" />
      <path d="M8 9h10M8 12h7" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 15c2-2 5-3 7-3s5 1 7 3" />
      <path d="M5 15h3m8 0h3" />
    </svg>
  );
}

/* ───────────────────────────── */
/* CLASSIFICATION ICONS          */
/* ───────────────────────────── */

export function IconTag() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3 w-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V3h4l10 10-4 4L3 7z" />
      <circle cx="7" cy="7" r="1.5" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <path d="M16 7c0-2-2-3-4-3s-4 1-4 3c0 3 8 2 8 5 0 2-2 3-4 3s-4-1-4-3" />
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h6M8 12h8M8 16h4" />
    </svg>
  );
}
