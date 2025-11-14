import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CallListItem from './CallListItem.jsx';
import FilterPanel from './FilterPanel.jsx';

export default function CallList({ calls, selectedId, onSelect }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAgentMenuOpen, setIsAgentMenuOpen] = useState(false);
  const navigate = useNavigate();
    <div className="flex flex-col h-full bg-white">

      {/* === TOP BAR: Anna + Dialer === */}
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-white">
  {/* Anna + статусное меню */}
  <div className="relative">
    <button
      type="button"
      onClick={() => setIsAgentMenuOpen((open) => !open)}
      className="inline-flex items-center gap-2 px-4 h-8 rounded-full bg-blue-600 text-white text-sm font-medium"
    >
      <span className="relative inline-flex h-3 w-3">
        <span className="absolute inset-0 bg-green-400 rounded-full" />
      </span>
      Anna
    </button>

    {isAgentMenuOpen && (
      <div className="absolute mt-2 w-80 rounded-lg shadow-lg bg-white border border-slate-200 z-30">
        <div className="px-5 pt-4 pb-3">
          {/* Online */}
          <div className="flex items-start gap-3 mb-4">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500" />
            <div>
              <div className="text-sm font-medium text-slate-900">Online</div>
              <div className="text-xs text-slate-600 mt-1">
                Available to accept inbound interactions and transfers, and
                active in any call queues you are part of.
              </div>
            </div>
          </div>

          {/* Offline */}
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full border border-slate-400" />
            <div>
              <div className="text-sm font-medium text-slate-900">Offline</div>
              <div className="text-xs text-slate-600 mt-1">
                Not available to accept inbound interactions or transfers, but
                can still place outbound interactions.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <button
            type="button"
            className="w-full flex items-center justify-between px-5 py-3 text-sm text-slate-800 hover:bg-slate-50"
          >
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">🏢</span>
              Master Appliance
            </span>
            <span className="text-blue-600 text-sm font-medium">Update</span>
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-between px-5 py-3 text-sm text-slate-800 hover:bg-slate-50 rounded-b-lg"
          >
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true">⚙️</span>
              Audio Settings
            </span>
            <span className="text-blue-600 text-sm font-medium">Update</span>
          </button>
        </div>
      </div>
    )}
  </div>

  {/* Dialer справа – открывает /dialer */}
  <button
    type="button"
    onClick={() => navigate('/dialer')}
    className="inline-flex items-center gap-2 px-4 h-8 rounded-full border border-slate-300 text-sm text-slate-600 bg-slate-50"
  >
    <span aria-hidden="true">📞</span>
    Dialer
  </button>
</div>

      {/* === SEARCH + FILTER ROW === */}
      <div className="px-3 py-2 border-b flex items-center gap-3 text-xs">

        {/* Search bar */}
        <div className="flex items-center flex-1 h-7 rounded-md border border-slate-200 px-2 bg-white">
          <span className="mr-1 text-[13px]" aria-hidden="true">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-6 border-0 text-[11px] focus:outline-none"
          />
        </div>

        {/* Filter icon */}
        <button className="h-7 w-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-600 bg-white">
          <span aria-hidden="true">≡</span>
        </button>

        {/* All Items dropdown */}
        <button className="px-3 h-7 rounded-full border border-blue-400 text-[11px] text-blue-600 font-medium bg-blue-50 whitespace-nowrap">
          All Items ▾
        </button>
      </div>

      {/* === ACTIVE LABEL === */}
      <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
        Active
      </div>
      <div className="px-4 pb-1 text-[11px] text-slate-300">—</div>

      {/* === REVIEWED LABEL === */}
      <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
        Reviewed
      </div>

      {/* === LIST OF CALLS === */}
      <div className="flex-1 overflow-auto text-xs">
        {calls.map((call) => (
          <CallListItem
            key={call.id}
            call={call}
            active={call.id === selectedId}
            onClick={() => onSelect(call.id)}
          />
        ))}
      </div>
    </div>
  );
}
