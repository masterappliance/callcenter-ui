import { useNavigate } from "react-router-dom";
import CallList from "@/components/calls/CallList.jsx";
import { calls } from "@/lib/dummyData.js";
import DialerPanel from "@/components/dialer/DialerPanel.jsx";

export default function DialerLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT: call list, no selection */}
      <section className="w-80 border-r bg-white flex flex-col overflow-hidden">
        <CallList
          calls={calls}
          selectedId={null}
          onSelect={(callId) => navigate(`/calls/${callId}`)}
        />
      </section>

      {/* CENTER: dialer */}
      <section className="flex-1 bg-slate-50 flex items-start justify-center">
        <div className="w-full max-w-xl mt-10">
          <DialerPanel />
        </div>
      </section>

      {/* RIGHT: empty space (can be used later) */}
      <section className="w-80 border-l bg-slate-50 hidden xl:block" />
    </div>
  );
}
