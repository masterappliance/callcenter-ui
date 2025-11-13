import React from "react";
import { useParams } from "react-router-dom";

function LeadDetailsCard({ name, phone }) {
  return (
    <aside className="w-80 border-l bg-white p-6 text-sm hidden lg:flex flex-col">
      <div className="text-lg font-semibold mb-3">Lead details</div>

      <div className="mb-4">
        <div className="text-base font-semibold">{name}</div>
        <div className="text-xs text-green-600 mt-1">👍 Classified as booked</div>
      </div>

      <a
        href={`tel:${phone}`}
        className="text-sky-600 text-sm hover:underline mb-1"
      >
        {phone}
      </a>
      <div className="text-slate-500 text-xs mb-6">San Jose West, CA</div>

      <div className="mb-3">
        <div className="text-xs font-semibold text-slate-700 mb-1">
          CLASSIFICATION STATUS
        </div>
        <div className="text-xs text-slate-500">Nov 12, 2025</div>
      </div>

      <div>
        <div className="text-xs font-semibold text-slate-700 mb-1">Tags</div>
        <div className="inline-flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full text-green-700 text-xs font-medium">
          Non-Visited Cx: Booked
        </div>
      </div>
    </aside>
  );
}

export default function CallDetails() {
  // Later you can use id to load real data
  const { id } = useParams();

  // Static demo values for now
  const name = "Parviz Sahbaee";
  const phone = "408-482-6550";

  return (
    <>
      {/* LEFT COLUMN: call list preview */}
      <section className="w-80 border-r bg-white hidden md:flex flex-col text-sm">
        <div className="px-4 pt-3 pb-2 flex gap-2">
          <button className="flex-1 h-8 rounded-full border border-slate-200 text-xs text-slate-500 bg-slate-50">
            Anna
          </button>
          <button className="flex-1 h-8 rounded-full border border-sky-500 text-xs text-sky-600 bg-sky-50 font-medium">
            Dialer
          </button>
        </div>

        <div className="px-4 pb-2 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <button className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-slate-50">
              🔍
            </button>
            <button className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-slate-50">
              ⚙️
            </button>
          </div>
          <button className="px-3 py-1 rounded-full border bg-slate-50 hover:bg-slate-100 text-[11px]">
            All items ▾
          </button>
        </div>

        <div className="px-4 py-2 border-t text-xs text-slate-500">
          <div className="font-semibold text-slate-600 mb-1">Reviewed</div>
        </div>

        <div className="flex-1 overflow-auto text-xs">
          <div className="px-4 py-3 border-b bg-indigo-50 flex justify-between">
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                <span className="text-[10px] text-green-500">⮕</span>
                <span className="text-[11px] text-slate-400">Natalia MA</span>
              </div>
              <div className="font-medium text-slate-800 text-[13px]">
                {name}
              </div>
              <div className="text-[11px] text-slate-400">{phone}</div>
            </div>
            <div className="text-[11px] text-slate-400">5:33 pm</div>
          </div>
        </div>
      </section>

      {/* CENTER: call details */}
      <main className="flex-1 flex flex-col overflow-auto p-8 bg-slate-50">
        <div className="max-w-3xl">
          {/* Name */}
          <div className="text-2xl font-semibold mb-4">{name}</div>

          {/* Title row */}
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-lg font-semibold">Inbound recorded call</h2>
            <button className="w-8 h-8 rounded-full border flex items-center justify-center text-sm">
              👍
            </button>
            <button className="w-8 h-8 rounded-full border flex items-center justify-center text-sm">
              👎
            </button>
          </div>

          {/* Interaction details */}
          <section className="mb-6">
            <div className="text-xs font-semibold text-slate-600 mb-2 tracking-wide uppercase">
              Interaction details
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 text-sm">
              <div>
                <div className="text-xs text-slate-500">Date</div>
                <div>Nov 12 5:33pm</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Tracking number</div>
                <div>
                  Lead.Gen / AMJ Marketing / Main Area 669-201-9880
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Duration</div>
                <div>9m 27s</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Agent</div>
                <div>Natalia MA</div>
              </div>
              <div>
                <div className="text-xs text-slate-500">Source</div>
                <div>Direct</div>
              </div>
            </div>
          </section>

          {/* Classification */}
          <section className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
                Classification
              </div>
              <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[9px] text-slate-400">
                ?
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <div className="inline-flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full text-green-700 text-xs font-medium">
                Non-Visited Cx: Booked
              </div>
              <button className="w-6 h-6 rounded-full border flex items-center justify-center text-xs text-slate-500">
                +
              </button>
            </div>
          </section>

          {/* Waveform placeholder */}
          <section className="mb-6">
            <div className="w-full h-24 bg-slate-200 rounded-md mb-3 flex items-end px-2 overflow-hidden">
              {Array.from({ length: 80 }).map((_, i) => (
                <div
                  key={i}
                  className="w-[2px] bg-slate-500 mr-[2px] rounded-full"
                  style={{
                    height: `${20 + (Math.sin(i / 4) + 1) * 18}px`,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <button className="px-3 py-1 rounded-full border bg-white">
                ⏮
              </button>
              <button className="px-3 py-1 rounded-full border bg-white">
                ▶
              </button>
              <button className="px-3 py-1 rounded-full border bg-white">
                1x
              </button>
              <span className="ml-auto text-slate-400">00:00</span>
              <button className="text-sky-600 hover:underline">
                Download MP3
              </button>
            </div>
          </section>

          {/* Transcript */}
          <section className="mb-10">
            <div className="text-lg font-semibold mb-2">Transcript</div>
            <div className="text-xs text-slate-500 mb-3">
              This transcript is in: <b>Language Unavailable</b>
            </div>
            <div className="bg-white border border-slate-200 rounded-md p-4 text-sm shadow-sm">
              <p className="mb-2">
                <span className="font-semibold text-sky-700">Natalie:</span>{" "}
                Hello, this is Natalie. How may I help you?
              </p>
              <p>
                <span className="font-semibold text-slate-700">Caller:</span>{" "}
                Hi, I need help with my refrigerator...
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* RIGHT sidebar */}
      <LeadDetailsCard name={name} phone={phone} />
    </>
  );
}
