import CallListItem from './CallListItem.jsx';

export default function CallList({ calls, selectedId, onSelect }) {
  return (
    <div className="flex flex-col h-full bg-white">

      {/* === TOP BAR: Anna + Dialer === */}
      <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-white">

        {/* Anna Button */}
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 h-8 rounded-full bg-blue-600 text-white text-sm font-medium"
        >
          <span className="relative inline-flex h-3 w-3">
            <span className="absolute inset-0 bg-green-400 rounded-full"></span>
          </span>
          Anna
        </button>

        {/* Dialer Button */}
        <button
          type="button"
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
