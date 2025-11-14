export default function CallListItem({ call, active, onClick }) {
  const { callerName, phone, time, kind } = call;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full px-4 py-3 border-b flex items-center justify-between text-left text-[12px]",
        active ? "bg-blue-50" : "hover:bg-slate-50",
      ].join(" ")}
    >
      {/* LEFT: icon + name/number */}
      <div className="flex items-center gap-2 min-w-0">
        <CallTypeIcon kind={kind} />

        <div className="flex flex-col min-w-0">
          <span className="text-slate-800 font-medium truncate">
            {callerName}
          </span>
          <span className="text-[11px] text-slate-500 truncate">{phone}</span>
        </div>
      </div>

      {/* RIGHT: time */}
      <div className="ml-3 text-[11px] text-slate-400 shrink-0">
        {time}
      </div>
    </button>
  );
}

/**
 * Icons modeled after CallRail:
 * - inbound: green arrow (incoming call)
 * - outbound: blue arrow (outgoing call)
 * - missed: red clock/cross
 * - sms: message bubble
 * - voicemail: two circles (voicemail icon)
 */
function CallTypeIcon({ kind }) {
  switch (kind) {
    case "outbound":
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-blue-500">
          <OutboundIcon />
        </span>
      );
    case "missed":
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-500">
          <MissedIcon />
        </span>
      );
    case "sms":
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
          <SmsIcon />
        </span>
      );
    case "voicemail":
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-500">
          <VoicemailIcon />
        </span>
      );
    case "inbound":
    default:
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
          <InboundIcon />
        </span>
      );
  }
}

function InboundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 3a1 1 0 0 0 0 2h6.59L6.3 12.29a1 1 0 1 0 1.4 1.42L15 6.41V13a1 1 0 1 0 2 0V3H7Z"
      />
    </svg>
  );
}

function OutboundIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M17 3a1 1 0 0 0-1 1v6.59L6.71 1.29A1 1 0 0 0 5.3 2.71L14.59 12H8a1 1 0 0 0 0 2h10V3Z"
      />
    </svg>
  );
}

function MissedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm0 2a6 6 0 1 1-6 6 6.01 6.01 0 0 1 6-6Zm-1 2v4a1 1 0 0 0 .29.71l2 2a1 1 0 1 0 1.42-1.42L13 10.59V8a1 1 0 0 0-2 0Z"
      />
    </svg>
  );
}

function SmsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 4a2 2 0 0 0-2 2v8.5A1.5 1.5 0 0 0 3.5 16H7l3.5 3.5a1 1 0 0 0 1.7-.7V16h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm2 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm0 3h5a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z"
      />
    </svg>
  );
}

function VoicemailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 8a4 4 0 1 0 0 8h10a4 4 0 1 0-4-4 3.98 3.98 0 0 0 .8 2.4H10.2A3.98 3.98 0 0 0 11 12a4 4 0 0 0-4-4Zm0 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm10 0a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}
