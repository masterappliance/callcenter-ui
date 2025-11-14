// src/pages/CallsLayout.jsx

import { useState } from "react";
import CallList from "../components/calls/CallList.jsx";
import CallDetailsPanel from "../components/calls/CallDetailsPanel.jsx";
import InteractionsPanel from "../components/calls/InteractionsPanel.jsx";
import { calls } from "../dummyData.js"; // adjust if dummyData is elsewhere

export default function CallsLayout() {
  const [selectedId, setSelectedId] = useState(calls[0]?.id);
  const [showInteractions, setShowInteractions] = useState(false);

  const selectedCall = calls.find((c) => c.id === selectedId);

  return (
    <div className="h-full flex flex-col">
      {/* Top bar (optional). If AppShell already shows header, you can remove this. */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-white">
        <div className="text-[18px] font-semibold text-slate-900">
          Lead Center
        </div>
        <div className="flex items-center gap-3 text-[12px] text-slate-500">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Anna</span>
          </span>
          <button
            type="button"
            className="px-3 h-8 rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
          >
            Dialer
          </button>
        </div>
      </div>

      {/* Main content: three columns */}
      <div className="flex flex-1 gap-4 px-4 py-4 bg-slate-100">
        {/* LEFT: Call list */}
        <div className="w-[320px] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <CallList
            calls={calls}
            selectedId={selectedId}
            onSelect={(id) => {
              setSelectedId(id);
              setShowInteractions(false); // close right panel on new selection
            }}
          />
        </div>

        {/* MIDDLE: Call details */}
        <div className="flex-1">
          <CallDetailsPanel
            call={selectedCall}
            onShowInteractions={() => setShowInteractions(true)}
          />
        </div>

        {/* RIGHT: More interactions (hidden by default) */}
        {showInteractions && (
          <div className="w-[380px]">
            <InteractionsPanel
              call={selectedCall}
              onClose={() => setShowInteractions(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
