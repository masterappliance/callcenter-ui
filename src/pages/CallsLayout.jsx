// src/pages/CallsLayout.jsx
import { useState } from 'react';
import { calls } from '@/lib/dummyData.js';

import CallsHeader from '@/components/calls/CallsHeader.jsx';
import CallList from '@/components/calls/CallList.jsx';
import CallDetailsPanel from '@/components/calls/CallDetailsPanel.jsx';
import InteractionsPanel from '@/components/calls/InteractionsPanel.jsx';

export default function CallsLayout() {
  const [selectedId, setSelectedId] = useState(calls[0]?.id ?? null);
  const [showInteractions, setShowInteractions] = useState(false);

  const selectedCall = calls.find((c) => c.id === selectedId);

  return (
    <div className="flex flex-1 overflow-hidden">

      {/* LEFT COLUMN */}
      <aside className="w-[320px] border-r border-slate-200 bg-white flex flex-col">
        <CallsHeader />
        <CallList
          calls={calls}
          selectedId={selectedId}
          onSelect={(id) => {
            setSelectedId(id);
            setShowInteractions(false);
          }}
        />
      </aside>

      {/* MIDDLE + OPTIONAL RIGHT COLUMN */}
      <div className="flex-1 flex overflow-hidden">

        {/* MIDDLE: call details */}
        <div className={`flex-1 overflow-auto bg-slate-50`}>
          {selectedCall ? (
            <CallDetailsPanel
              call={selectedCall}
              onShowInteractions={() => setShowInteractions(true)}
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              Select a call to view details
            </div>
          )}
        </div>

        {/* RIGHT: only when user clicks "More interactions" */}
        {showInteractions && (
          <aside className="w-[360px] border-l border-slate-200 bg-white">
            <InteractionsPanel
              call={selectedCall}
              onClose={() => setShowInteractions(false)}
            />
          </aside>
        )}

      </div>
    </div>
  );
}
