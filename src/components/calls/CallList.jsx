import { useState, useRef, useEffect } from "react";
import CallsHeader from "./CallsHeader.jsx";
import CallListItem from "./CallListItem.jsx";
import FilterPanel from "./FilterPanel.jsx";

export default function CallList({ calls, selectedId, onSelect }) {
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isAllItemsOpen, setIsAllItemsOpen] = useState(false);
  const [itemsFilter, setItemsFilter] = useState("All Items"); // "My Items" | "All Items"

  const controlsRef = useRef(null);

  // Close All Items dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setIsAllItemsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Split calls into Active / Reviewed (default to Reviewed)
  const activeCalls = calls.filter((c) => c.status === "active");
  const reviewedCalls = calls.filter((c) => c.status !== "active");

  return (
    <div className="flex flex-col h-full">
      {/* Top row: Anna (left) + Dialer (right) */}
      <CallsHeader />

      {/* Search + filter + All Items row */}
     <div className="flex items-center gap-2 text-slate-500 w-[120px] min-w-[110px]">
  <span className="shrink-0 text-slate-400">
    <SearchIcon />
  </span>
  <input
    type="text"
    placeholder="Search"
    className="h-7 w-full border-b border-slate-200 text-[12px] text-slate-700 px-0 pb-0.5 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-0"
  />
</div>


        {/* Right: filter icon + All Items pill */}
        <div ref={controlsRef} className="flex items-center gap-2">
          {/* FILTER ICON → opens full filter panel */}
          <button
            type="button"
            onClick={() => {
              setIsFilterPanelOpen(true);
              setIsAllItemsOpen(false);
            }}
            className="h-7 w-7 rounded-full flex items-center justify-center border border-slate-200 text-slate-500 hover:bg-slate-50"
            title="Filters"
          >
            <span className="text-[13px]">☰</span>
          </button>

          {/* ALL ITEMS pill with dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAllItemsOpen((prev) => !prev)}
              className="px-3 h-8 rounded-full flex items-center gap-1 text-[12px] font-medium border border-primary/80 text-primary bg-white hover:bg-primary/5"
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
          </div>
        </div>
      </div>

      {/* MAIN AREA UNDER SEARCH ROW */}
      {isFilterPanelOpen ? (
        <FilterPanel
          onCancel={() => setIsFilterPanelOpen(false)}
          onApply={() => setIsFilterPanelOpen(false)}
        />
      ) : (
        <div className="flex-1 overflow-auto text-xs">
          {/* Active section */}
          <div className="px-4 pt-3 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
            Active
          </div>
          <div className="px-4 pb-1 text-[11px] text-slate-300">—</div>

          {activeCalls.map((call) => (
            <CallListItem
              key={call.id}
              call={call}
              active={call.id === selectedId}
              onClick={() => onSelect(call.id)}
            />
          ))}

          {/* Reviewed section */}
          <div className="px-4 pt-4 pb-1 text-[11px] text-slate-400 uppercase tracking-wide">
            Reviewed
          </div>

          {reviewedCalls.map((call) => (
            <CallListItem
              key={call.id}
              call={call}
              active={call.id === selectedId}
              onClick={() => onSelect(call.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4a7 7 0 1 0 4.24 12.59l2.17 2.17a1 1 0 0 0 1.42-1.42l-2.17-2.17A7 7 0 0 0 11 4Zm-5 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
      />
    </svg>
  );
}

