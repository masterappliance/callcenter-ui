// src/components/calls/CallListItem.jsx
import {
  InboundIcon,
  OutboundIcon,
  MissedIcon,
  SmsIcon,
  VoicemailIcon,
} from '@/components/icons/SoftIcons.jsx';

export default function CallListItem({ call, active, onClick }) {
  const { callerName, phone, time, kind } = call;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full px-4 py-3 border-b flex items-center justify-between text-left text-[12px]',
        active ? 'bg-blue-50' : 'hover:bg-slate-50',
      ].join(' ')}
    >
      {/* LEFT: icon + name/number */}
      <div className="flex items-center gap-2 min-w-0">
        <CallTypeIcon kind={kind} />

        <div className="flex flex-col min-w-0">
          <span className="text-slate-800 font-medium truncate">
            {callerName}
          </span>
          <span className="text-[11px] text-slate-500 truncate">
            {phone}
          </span>
        </div>
      </div>

      {/* RIGHT: time */}
      <div className="ml-3 text-[11px] text-slate-400 shrink-0">{time}</div>
    </button>
  );
}

function CallTypeIcon({ kind }) {
  switch (kind) {
    case 'outbound':
      return (
        <Circle className="bg-blue-50 text-blue-500">
          <OutboundIcon />
        </Circle>
      );
    case 'missed':
      return (
        <Circle className="bg-red-50 text-red-500">
          <MissedIcon />
        </Circle>
      );
    case 'sms':
      return (
        <Circle className="bg-indigo-50 text-indigo-500">
          <SmsIcon />
        </Circle>
      );
    case 'voicemail':
      return (
        <Circle className="bg-purple-50 text-purple-500">
          <VoicemailIcon />
        </Circle>
      );
    case 'inbound':
    default:
      return (
        <Circle className="bg-emerald-50 text-emerald-500">
          <InboundIcon />
        </Circle>
      );
  }
}

function Circle({ className, children }) {
  return (
    <span
      className={
        'inline-flex h-6 w-6 items-center justify-center rounded-full ' +
        className
      }
    >
      {children}
    </span>
  );
}
