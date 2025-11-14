// src/components/calls/InteractionsPanel.jsx

// Visual-only panel for "More interactions" view.

const MOCK_INTERACTIONS = [
  {
    id: 1,
    type: "inbound-text",
    title: "Inbound Text",
    agent: "Yana MA",
    preview: "Stop",
    dateLabel: "Nov 13",
  },
  {
    id: 2,
    type: "inbound-call",
    title: "Inbound recorded call",
    agent: "Dispatcher Test",
    preview: "",
    dateLabel: "Oct 21",
  },
  {
    id: 3,
    type: "inbound-call",
    title: "Inbound recorded call",
    agent: "Dispatcher Test",
    preview: "",
    dateLabel: "Oct 17",
  },
  {
    id: 4,
    type: "outbound-text",
    title: "Outbound Text",
    agent: "",
    preview:
      "Thank you for calling Appliance Repair. Sorry, we missed your call. We will get back to you as soon as p…",
    dateLabel: "Oct 17",
  },
  {
    id: 5,
    type: "voicemail",
    title: "Voicemail with transcript",
    agent: "",
    preview:
      "Hi, this is job number 34927 to repair the washer. And the invoice date is 10-10-25. And you charged me …",
    dateLabel: "Oct 17",
  },
  {
    id: 6,
    type: "inbound-call",
    title: "Inbound recorded call",
    agent: "Yana MA",
    preview: "",
    dateLabel: "Oct 16",
  },
];

export default function InteractionsPanel({ call, onClose }) {
  const interactions = call?.interactions || MOCK_INTERACTIONS;
  const callerName = call?.callerName || "Wireless Caller";

  return (
    <div className="h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* HEADER */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-[15px] font-semibold text-slate-800">
            More interactions
          </div>
          <div className="text-[12px] text-slate-500">{callerName}</div>
        </div>

        <div className="flex items-center gap-2">
          <CircleIconButton title="Messages">
            <span className="text-[13px]">💬</span>
          </CircleIconButton>
          <CircleIconButton title="Call">
            <span className="text-[13px]">↗︎</span>
          </CircleIconButton>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="ml-1 text-slate-300 hover:text-slate-500 text-lg"
              title="Close"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* FILTER ROW */}
      <div className="px-6 pt-4 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <span className="text-[12px] text-slate-500">Filter by</span>
          <button
            type="button"
            className="inline-flex items-center gap-1 px-3 h-7 rounded-full border border-slate-200 bg-slate-50 text-[12px] text-slate-700 hover:bg-slate-100"
          >
            <span>Interaction type</span>
            <span className="text-[10px]">▾</span>
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="flex-1 overflow-auto px-6 py-4 space-y-3">
        {interactions.map((item) => (
          <InteractionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function InteractionCard({ item }) {
  const bgClass = getBackgroundClass(item.type);
  const iconColor = getIconColorClass(item.type);

  return (
    <button
      type="button"
      className={
        "w-full text-left rounded-lg px-4 py-3 flex items-start justify-between gap-3 " +
        bgClass
      }
    >
      <div className="flex items-start gap-3 min-w-0">
        <div
          className={
            "mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full " +
            iconColor
          }
        >
          <InteractionIcon type={item.type} />
        </div>

        <div className="flex flex-col min-w-0 text-[13px]">
          <div className="flex flex-wrap items-center gap-1">
            <span className="font-medium text-slate-800">
              {item.title}
            </span>
            {item.agent && (
              <span className="text-[12px] text-slate-500">
                with {item.agent}
              </span>
            )}
          </div>

          {item.preview && (
            <div className="mt-1 text-[12px] text-slate-600 truncate">
              {item.preview}
            </div>
          )}
        </div>
      </div>

      <div className="ml-3 text-[11px] text-slate-400 shrink-0">
        {item.dateLabel}
      </div>
    </button>
  );
}

/*  ICONS & STYLES  */

function getBackgroundClass(type) {
  switch (type) {
    case "inbound-text":
    case "outbound-text":
    case "inbound-call":
    case "voicemail":
      return "bg-slate-50";
    default:
      return "bg-slate-50";
  }
}

function getIconColorClass(type) {
  switch (type) {
    case "inbound-text":
    case "outbound-text":
      return "bg-blue-50 text-blue-500";
    case "inbound-call":
      return "bg-emerald-50 text-emerald-600";
    case "voicemail":
      return "bg-amber-50 text-amber-600";
    default:
      return "bg-slate-100 text-slate-500";
  }
}

function InteractionIcon({ type }) {
  if (type === "inbound-text" || type === "outbound-text") {
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

  if (type === "voicemail") {
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

  // inbound-call fallback (green phone)
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
    </svg>
  );
}

function CircleIconButton({ children, title }) {
  return (
    <button
      type="button"
      title={title}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
    >
      {children}
    </button>
  );
}
