// src/components/calls/CallsHeader.jsx
import { useState } from "react";

export default function CallsHeader() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative border-b bg-white">
      {/* Top row: agent / dialer / filters / all items */}
      <div className="h-11 px-4 flex items-center justify-between gap-3 whitespace-nowrap">
        {/* Left side: agent and dialer */}
        <div className="flex items-center gap-2">
          <button className="px-3 h-7 rounded-full bg-slate-100 text-[11px] text-slate-800 font-medium">
            Anna
          </button>
          <button className="px-3 h-7 rounded-full border border-slate-200 text-[11px] text-slate-600">
            Dialer
          </button>
        </div>

        {/* Right side: filters + all items */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="px-3 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600 hover:bg-slate-50"
          >
            Filters ▾
          </button>
          <button
            type="button"
            className="px-3 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600 hover:bg-slate-50"
          >
            All items ▾
          </button>
        </div>
      </div>

      {/* Dropdown: absolutely positioned, does not push the header down */}
      {isFilterOpen && (
        <div className="absolute left-0 right-0 top-11 z-20 border-y border-slate-200 bg-white shadow-sm">
          <div className="px-4 py-3 text-xs text-slate-700">
            <div className="mb-2 font-semibold text-slate-800">Call filters</div>
            <div className="flex flex-wrap gap-2">
              <FilterChip label="Inbound" />
              <FilterChip label="Outbound" />
              <FilterChip label="Missed" />
              <FilterChip label="Recorded" />
              {/* Add more filters as needed */}
            </div>
          </div>
        </div>
      )}
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
