import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import CallList from "@/components/calls/CallList.jsx";
import CallDetails from "@/components/calls/CallDetails.jsx";
import LeadDetailsPanel from "@/components/calls/LeadDetailsPanel.jsx";
import { calls } from "@/lib/dummyData.js";

export default function CallsLayout() {
  const params = useParams();
  const navigate = useNavigate();

  const selectedId = params.id || null;
  const selectedCall = calls.find((c) => c.id === selectedId) || null;

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT: Call list (never disappears) */}
      <section className="w-80 border-r bg-white flex flex-col overflow-hidden">
        <CallList
          calls={calls}
          selectedId={selectedId}
          onSelect={(callId) => navigate(`/calls/${callId}`)}
        />
      </section>

      {/* CENTER: Call details */}
      <section className="flex-1 border-r bg-white flex flex-col overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex-1 flex items-center justify-center text-xs text-slate-400">
                Select a call from the list.
              </div>
            }
          />
          <Route
            path=":id"
            element={
              selectedCall ? (
                <CallDetails call={selectedCall} />
              ) : (
                <div className="flex-1 flex items-center justify-center text-xs text-slate-400">
                  Call not found.
                </div>
              )
            }
          />
        </Routes>
      </section>

      {/* RIGHT: Lead details */}
      <section className="w-80 bg-white flex-shrink-0 border-l">
        {selectedCall && <LeadDetailsPanel call={selectedCall} />}
      </section>
    </div>
  );
}
