import {
  IconAbandoned,
  IconOutbound,
  IconAnswered,
  IconMissed,
} from "../icons/SoftIcons.jsx";

export default function CallListItem({ call, active, onClick }) {
  // expected kinds: "abandoned" | "outbound" | "missed" | "answered"
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
      {/* LEFT */}
      <div className="flex items-center gap-2 min-w-0">
        <CallStatusIcon kind={kind} />

        <div className="flex flex-col min-w-0">
          <span className="text-slate-800 font-medium truncate">
            {callerName}
          </span>
          <span className="text-[11px] text-slate-500 truncate">{phone}</span>
        </div>
      </div>

      {/* RIGHT: time */}
      <div className="ml-3 text-[11px] text-slate-400 shrink-0">{time}</div>
    </button>
  );
}

function CallStatusIcon({ kind }) {
  switch (kind) {
    case "abandoned":
      return (
        <Circle className="bg-slate-50 text-slate-400">
          <IconAbandoned />
        </Circle>
      );

    case "outbound":
      return (
        <Circle className="bg-blue-50 text-blue-600">
          <IconOutbound />
        </Circle>
      );

    case "missed":
      return (
        <Circle className="bg-red-50 text-red-500">
          <IconMissed />
        </Circle>
      );

    case "answered":
    default:
      return (
        <Circle className="bg-emerald-50 text-emerald-600">
          <IconAnswered />
        </Circle>
      );
  }
}

function Circle({ className, children }) {
  return (
    <span
      className={
        "inline-flex h-6 w-6 items-center justify-center rounded-full " +
        className
      }
    >
      {children}
    </span>
  );
}
