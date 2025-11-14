// src/components/calls/CallList.jsx
import CallListItem from './CallListItem.jsx';

export default function CallList({ calls, selectedId, onSelect }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header: search + filters */}
      <div className="px-3 py-2 border-b flex items-center space-x-2 text-xs">
        {/* Search with magnifier */}
        <div className="flex items-center flex-1 h-7 rounded-md border border-slate-200 px-2 bg-white">
          <span className="mr-1 text-[11px]" aria-hidden="true">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-6 border-0 text-[11px] focus:outline-none"
          />
        </div>

        {/* Filter dropdown */}
        <button className="px-2 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600 whitespace-nowrap">
          All items ▾
        </button>
      </div>

      {/* Status headings (optional sections like in CallRail) */}
      <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
        Active
      </div>
      <div className="px-4 pb-1 text-[11px] text-slate-300">—</div>

      <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
        Reviewed
      </div>

      {/* Calls list */}
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
