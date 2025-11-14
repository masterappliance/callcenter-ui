// src/pages/CallsLayout.jsx
import { useState } from 'react';
import { calls } from '../lib/dummyData.js';

import CallsHeader from '@/components/calls/CallsHeader.jsx';
import CallList from '@/components/calls/CallList.jsx';
import CallDetailsPanel from '@/components/calls/CallDetailsPanel.jsx';
import InteractionsPanel from '@/components/calls/InteractionsPanel.jsx';

export default function CallsLayout() {
  const [selectedId, setSelectedId] = useState(calls[0]?.id ?? null);
  const [showInteractions, setShowInteractions] = useState(false);

  const selectedCall =
    calls.find((c) => c.id === selectedId) ?? calls[0];

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT COLUMN: Anna / Dialer + search + call list */}
      <aside className="w-[320px] border-r border-slate-200 bg-white flex flex-col">
        {/* This is the ONLY place where Anna + Dialer live */}
        <CallsHeader />

        <CallList
          calls={calls}
          selectedId={selectedCall?.id}
          onSelect={(id) => {
            setSelectedId(id);
            // when switching calls, keep whatever state you want for interactions
          }}
        />
      </aside>

      {/* MIDDLE + OPTIONAL RIGHT COLUMN */}
      <section className="flex-1 flex overflow-hidden">
        {/* MIDDLE: call details */}
        <div
          className={`flex-1 overflow-auto bg-slate-50 ${
            showInteractions ? 'border-r border-slate-200' : ''
          }`}
        >
          <CallDetailsPanel
            call={selectedCall}
            onShowInteractions={() => setShowInteractions(true)}
          />
        </div>

        {/* RIGHT: more interactions list – only when open */}
        {showInteractions && (
          <aside className="w-[360px] bg-white border-l border-slate-200">
            <InteractionsPanel
              call={selectedCall}
              onClose={() => setShowInteractions(false)}
            />
          </aside>
        )}
      </section>
    </div>
  );
}
