// src/pages/CallsLayout.jsx
import { useState } from 'react';
import { calls } from '@/lib/dummyData.js';

import CallList from '@/components/calls/CallList.jsx';
import CallDetailsPanel from '@/components/calls/CallDetailsPanel.jsx';
import InteractionsPanel from '@/components/calls/InteractionsPanel.jsx';
import Dialer from '@/components/dialer/Dialer.jsx';

export default function CallsLayout() {
  const [selectedId, setSelectedId] = useState(null);
  const [showInteractions, setShowInteractions] = useState(false);

  const selectedCall = calls.find((c) => c.id === selectedId) ?? calls[0];

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT: call list only */}
      <aside className="w-[320px] border-r border-slate-200 bg-white flex flex-col">
        <CallList
          calls={calls}
          selectedId={selectedCall?.id}
          onSelect={(id) => {
            setSelectedId(id);
            setShowInteractions(false);
          }}
        />
      </aside>

      {/* CENTER + optional RIGHT */}
      <section className="flex-1 flex overflow-hidden bg-slate-50">
        {/* CENTER: call details */}
        <div className="flex-1 bg-slate-50">
  {selectedCall ? (
    <CallDetailsPanel call={selectedCall} />
  ) : (
    <div className="h-full flex items-start justify-center pt-12">
      <div className="w-full max-w-xl">
        <Dialer />
      </div>
    </div>
  )}
</div>

        {/* RIGHT: interactions list */}
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
