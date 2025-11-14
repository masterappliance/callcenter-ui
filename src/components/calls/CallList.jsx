import { useState, useRef, useEffect } from "react";
import CallListItem from "./CallListItem.jsx";
import CallsHeader from "./CallsHeader.jsx";

export default function CallList({ calls, selectedId, onSelect }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isAllItemsOpen, setIsAllItemsOpen] = useState(false);
  const [itemsFilter, setItemsFilter] = useState("All Items"); // "My Items" | "All Items"

  const controlsRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setIsFilterOpen(false);
        setIsAllItemsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Top row: Anna (left) + Dialer (right) */}
      <CallsHeader />

      {/* Search + filter + All Items row */}
      <div className="px-4 py-2 border-b bg-white flex items-center gap-3 text-xs">
        {/* Search with merged magnifier + input */}
        <div className="flex-1 flex items-center gap-2 text-slate-500">
          <span className="text-[15px]">🔍</span>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 h-7 border-b border-slate-200 text-[11px] text-slate-700 px-0 pb-0.5 focus:outline-none focus:border-primary focus:ring-0"
          />
        </div>

        {/* Right side: filter icon + All Items pill & dropdowns */}
        <div ref={controlsRef} className="relative flex items-center gap-2">
          {/* Filter icon (opens Call Filters dropdown) */}
          <button
            type="button"
            onClick={() => {
              setIsFilterOpen((prev) => !prev);
              setIsAllItemsOpen(false);
            }}
            className="h-7 w-7 rounded-full flex items-center justify-center border border-slate-200 text-slate-500 hover:bg-slate-50"
          >
            {/* simple sliders icon */}
            <span className="text-[13px]">☰</span>
          </button>

          {/* All Items pill */}
          <button
            type="button"
            onClick={() => {
              setIsAllItemsOpen((prev) => !prev);
              setIsFilterOpen(false);
            }}
            className="px-3 h-8 rounded-full flex items-center gap-1 text-[11px] font-medium border border-primary text-primary bg-primary/5 shadow-[0_0_0_1px_rgba(37,99,235,0.3)] hover:bg-primary/10"
          >
            <span>{itemsFilter}</span>
            <span className="text-[10px]">▾</span>
          </button>

          {/* All Items dropdown */}
          {isAllItemsOpen && (
            <div className="absolute right-0 top-full mt-1 w-40 rounded-md border border-slate-200 bg-white shadow-lg z-30">
              <button
                type="button"
                onClick={() => {
                  setItemsFilter("My Items");
                  setIsAllItemsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[12px] text-slate-700 hover:bg-slate-50"
              >
                My Items
              </button>
              <button
                type="button"
                onClick={() => {
                  setItemsFilter("All Items");
                  setIsAllItemsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[12px] text-slate-700 hover:bg-slate-100 bg-slate-50"
              >
                All Items
              </button>
            </div>
          )}

          {/* Call Filters dropdown */}
          {isFilterOpen && (
            <div className="absolute right-20 top-full mt-1 w-72 rounded-md border border-slate-200 bg-white shadow-lg z-20">
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
