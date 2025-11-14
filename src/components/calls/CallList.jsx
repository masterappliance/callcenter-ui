import { useState, useRef, useEffect } from "react";
import CallListItem from "./CallListItem.jsx";
import CallsHeader from "./CallsHeader.jsx";

export default function CallList({ calls, selectedId, onSelect }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Top row: Anna + Dialer */}
      <CallsHeader />

      {/* Search + filter + All items row (like CallRail) */}
      <div
        ref={filterRef}
        className="relative px-3 py-2 border-b flex items-center gap-2 text-xs bg-white"
      >
        {/* Search icon */}
        <button className="h-7 w-7 rounded-full flex items-center justify-center border border-slate-200 text-slate-500">
          🔎
        </button>

        {/* Filter icon (opens dropdown) */}
        <button
          type="button"
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="h-7 w-7 rounded-full flex items-center justify-center border border-slate-200 text-slate-500"
        >
          {/* Funnel icon */}
          <span className="text-[13px]">☰</span>
        </button>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search"
          className="flex-1 h-7 rounded-md border border-slate-200 px-2 text-[11px] focus:outline-none focus:ring-1 focus:ring-primary/60"
        />

        {/* All items dropdown (visual only for now) */}
        <button className="px-2 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600 flex items-center gap-1">
          <span>All items</span>
          <span>▾</span>
        </button>

        {/* Filter dropdown panel */}
        {isFilterOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 z-20 border border-slate-200 bg-white rounded-lg shadow-lg">
            <div className="px-4 py-3 text-xs text-slate-700">
              <div className="mb-2 font-semibold text-slate-800">
                Call filters
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <FilterChip label="Inbound" />
                <FilterChip label="Outbound" />
                <FilterChip label="Missed" />
                <FilterChip label="Recorded" />
              </div>
              <div className="text-[11px] text-slate-400">
                Filters are visual only for now. Logic will be added later.
              </div>
            </div>
          </div>
        )}
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

function FilterChip({ label }) {
  return (
    <button
      type="button"
      className="px-2 py-1 rounded-full border border-slate-200 bg-slate-50 text-[11px] text-slate-600 hover:bg-slate-100"
    >
      {label}
    </button>
  );
}
