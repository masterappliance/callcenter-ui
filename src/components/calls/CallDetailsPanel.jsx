// src/components/calls/CallDetailsPanel.jsx
import { useNavigate } from 'react-router-dom';
import { DialerIcon } from '@/components/icons/SoftIcons.jsx';

export default function CallDetailsPanel({ call, onShowInteractions }) {
  const navigate = useNavigate();

  if (!call) {
    return (
      <div className="h-full flex items-center justify-center text-slate-400 text-sm">
        Select a call to view details
      </div>
    );
  }

  const {
    callerName,
    phone,
    date,
    time,
    duration,
    agent,
    source,
    trackingNumber,
  } = call;

  return (
    <div className="h-full overflow-auto">
      {/* Header */}
      <div className="px-8 pt-8 pb-4 flex items-center justify-between">
        <div>
          <div className="text-[14px] font-semibold text-slate-900">
            {callerName}
          </div>
          <div className="text-[12px] text-slate-500">{phone}</div>
        </div>

        <div className="flex items-center gap-3">
          {/* Open SMS / chat – placeholder */}
          <button
            type="button"
            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50"
          >
            💬
          </button>

          {/* Phone -> open Dialer */}
          <button
            type="button"
            onClick={() => navigate('/dialer')}
            className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-blue-500 hover:bg-blue-50"
            aria-label="Open dialer"
          >
            <DialerIcon />
          </button>
        </div>
      </div>

      {/* Title + sentiment icons */}
      <div className="px-8 pb-4 flex items-center gap-2">
        <h2 className="text-[16px] font-semibold text-slate-900">
          {call.title || 'Inbound recorded call'}
        </h2>
        <span aria-hidden="true">👍</span>
        <span aria-hidden="true">👎</span>
      </div>

      {/* Interaction details */}
      <section className="px-8 pb-6">
        <div className="flex items-center justify-between text-[11px] text-slate-500 uppercase tracking-wide mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-600">
              Interaction details
            </span>
          </div>

          {/* More interactions button (only visible if handler is provided) */}
          {onShowInteractions && (
            <button
              type="button"
              onClick={onShowInteractions}
              className="text-[11px] text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              More interactions
              <span aria-hidden="true">→</span>
            </button>
          )}
        </div>

        <dl className="grid grid-cols-[120px_minmax(0,1fr)] gap-y-1.5 text-[12px]">
          <dt className="text-slate-500">Date:</dt>
          <dd className="text-slate-800">
            {date} {time}
          </dd>

          <dt className="text-slate-500">Tracking number:</dt>
          <dd className="text-slate-800">{trackingNumber}</dd>

          <dt className="text-slate-500">Duration:</dt>
          <dd className="text-slate-800">{duration}</dd>

          <dt className="text-slate-500">Agent:</dt>
          <dd className="text-slate-800">{agent}</dd>

          <dt className="text-slate-500">Source:</dt>
          <dd className="text-slate-800">{source}</dd>
        </dl>
      </section>

      {/* Classification (simple stub – matches layout) */}
      <section className="px-8 pb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wide">
            Classification
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-[11px]">
          <button className="px-3 h-7 rounded-full border border-slate-200 bg-slate-50 text-slate-700">
            Value
          </button>
          <button className="px-3 h-7 rounded-full border border-slate-200 bg-slate-50 text-slate-700">
            Notes
          </button>
        </div>
      </section>

      {/* Waveform placeholder */}
      <section className="px-8 pb-8">
        <div className="h-32 rounded-lg bg-gradient-to-b from-blue-50 to-white border border-slate-200 flex items-center justify-center text-[11px] text-slate-400">
          Waveform / recording UI later
        </div>
      </section>
    </div>
  );
}
