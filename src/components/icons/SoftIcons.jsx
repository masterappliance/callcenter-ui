// src/components/icons/SoftIcons.jsx

/*
  Shared icon library:
  - All call status icons
  - Dialer icon
  - Action icons (mic, transfer, message, hangup)
  - Classification icons (tag, dollar, note)
*/

// Call type icons for list and interactions

export function InboundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 3a1 1 0 0 0 0 2h6.59L6.3 12.29a1 1 0 1 0 1.4 1.42L15 6.41V13a1 1 0 1 0 2 0V3H7Z"
      />
    </svg>
  );
}

export function OutboundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17 3a1 1 0 0 0-1 1v6.59L6.71 1.29A1 1 0 0 0 5.3 2.71L14.59 12H8a1 1 0 0 0 0 2h10V3Z"
      />
    </svg>
  );
}

export function MissedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm0 2a6 6 0 1 1-6 6 6.01 6.01 0 0 1 6-6Zm-1 2v4a1 1 0 0 0 .29.71l2 2a1 1 0 1 0 1.42-1.42L13 10.59V8a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}

export function SmsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 4a2 2 0 0 0-2 2v8.5A1.5 1.5 0 0 0 3.5 16H7l3.5 3.5a1 1 0 0 0 1.7-.7V16h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm2 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm0 3h5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z"
      />
    </svg>
  );
}

export function VoicemailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 8a4 4 0 1 0 0 8h10a4 4 0 1 0-4-4 3.98 3.98 0 0 0 .8 2.4H10.2A3.98 3.98 0 0 0 11 12a4 4 0 0 0-4-4Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm10 0a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

// Dialer icon (same for header, details, dialer button)

export function DialerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 4.5c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-.9.9c.8 1.5 2 2.7 3.5 3.5l.9-.9c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-1 1c-.7.7-1.8.9-2.7.5-2.4-1-4.8-3.4-5.8-5.8-.4-.9-.2-2 .5-2.7l1-1Z"
      />
    </svg>
  );
}

// Actions

export function IconWarning() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4l8 14H4l8-14z" />
      <path d="M12 10v4M12 16h.01" />
    </svg>
  );
}

export function IconMic() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="4" width="6" height="10" rx="3" />
      <path d="M12 14v4M8 18h8" />
    </svg>
  );
}

export function IconTransfer() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 7h8m0 0L9 3m4 4L9 11" />
      <path d="M19 17h-8m0 0 4 4m-4-4 4-4" />
    </svg>
  );
}

export function IconMessage() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-4 4v-4" />
      <path d="M8 9h10M8 12h7" />
    </svg>
  );
}

export function IconHangup() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 15c2-2 5-3 7-3s5 1 7 3" />
      <path d="M5 15h3m8 0h3" />
    </svg>
  );
}

// Classification

export function IconTag() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V3h4l10 10-4 4L3 7z" />
      <circle cx="7" cy="7" r="1.5" />
    </svg>
  );
}

export function IconDollar() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M16 7c0-2-2-3-4-3s-4 1-4 3c0 3 8 2 8 5 0 2-2 3-4 3s-4-1-4-3" />
    </svg>
  );
}

export function IconNote() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="14" height="16" rx="2" />
      <path d="M8 8h6M8 12h8M8 16h4" />
    </svg>
  );
}
