// src/components/calls/CallsScreen.jsx

import { useState } from "react";
import CallList from "./CallList.jsx";
import CallDetailsPanel from "./CallDetailsPanel.jsx";
import InteractionsPanel from "./InteractionsPanel.jsx";
import { calls } from "../../dummyData.js"; // adjust path if your dummyData lives elsewhere

export default function CallsScreen() {
  const [selectedId, setSelectedId] = useState(calls[0]?.id);
  const [showInteractions, setShowInteractions] = useState(false);

  const selectedCall = calls.find((c) => c.id === selectedId);

  return (
    <div className="flex h-full gap-4">
      {/* LEFT: Call list */}
      <div className="w-[320px]">
        <CallList
          calls={calls}
          selectedId={selectedId}
          onSelect={(id) => {
            setSelectedId(id);
            setShowInteractions(false); // close interactions when you pick a new call
          }}
        />
      </div>

      {/* MIDDLE: main call details */}
      <div className="flex-1">
        <CallDetailsPanel
          call={selectedCall}
          onShowInteractions={() => setShowInteractions(true)}
        />
      </div>

      {/* RIGHT: ONLY "More interactions" panel, hidden by default */}
      {showInteractions && (
        <div className="w-[380px]">
          <InteractionsPanel
            call={selectedCall}
            onClose={() => setShowInteractions(false)}
          />
        </div>
      )}
    </div>
  );
}
