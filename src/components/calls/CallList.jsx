import CallListItem from './CallListItem.jsx'

export default function CallList({ calls, selectedId, onSelect }) {
  return (
    <div className="flex flex-col h-full">
      {/* Header: search + filters */}
      <div className="px-3 py-2 border-b flex items-center space-x-2 text-xs">
        <button className="h-7 w-7 rounded-full flex items-center justify-center border border-slate-200 text-slate-500">
          🔎
        </button>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-7 rounded-md border border-slate-200 px-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-primary/60"
        />
        <button className="px-2 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600">
          All items ▾
        </button>
      </div>

      {/* Status headings */}
      <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
        Active
      </div>
      <div className="px-4 pb-1 text-[11px] text-slate-300">—</div>

      <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
        Reviewed
      </div>

      {/* Calls list */}
      <div className="flex-1 overflow-auto text-xs">
        {calls.map(call => (
          <CallListItem
            key={call.id}
            call={call}
            active={call.id === selectedId}
            onClick={() => onSelect(call.id)}
          />
        ))}
      </div>
    </div>
  )
}
