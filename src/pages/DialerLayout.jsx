// src/pages/DialerLayout.jsx
import CallsHeader from '@/components/calls/CallsHeader.jsx';
import CallList from '@/components/calls/CallList.jsx';
import Dialer from '@/components/dialer/Dialer.jsx';
import { calls } from '@/lib/dummyData.js';

export default function DialerLayout() {
  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT: Anna + search + calls list */}
      <aside className="w-[320px] border-r border-slate-200 bg-white flex flex-col">
        <CallsHeader />

        <CallList
          calls={calls}
          selectedId={calls[0]?.id ?? null}
          onSelect={() => {}}
        />
      </aside>

      {/* CENTER: Dialer on full remaining width, no right panel */}
      <section className="flex-1 flex overflow-auto bg-slate-50">
        <div className="flex-1 flex items-start justify-center py-10">
          <Dialer />
        </div>
      </section>
    </div>
  );
}
