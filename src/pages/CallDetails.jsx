import React from "react";

function LeadDetailsCard({ name, phone }) {
  return (
    <aside className="w-80 border-l bg-white p-6 text-sm flex flex-col">
      <div className="text-lg font-semibold mb-3">Lead details</div>

      {/* Name */}
      <div className="mb-3">
        <div className="text-base font-semibold">{name}</div>
        <div className="text-xs text-green-600">👍</div>
      </div>

      {/* Phone */}
      <a
        href={`tel:${phone}`}
        className="text-sky-600 text-sm hover:underline mb-1"
      >
        {phone}
      </a>

      {/* Location (placeholder) */}
      <div className="text-slate-500 text-xs mb-6">
        San Jose West, CA
      </div>

      {/* Classification */}
      <div className="text-xs font-semibold text-slate-700 mb-1">
        CLASSIFICATION STATUS
      </div>
      <div className="text-slate-500 text-xs mb-1">Nov 12, 2025</div>
      <div className="text-xs text-slate-500 mb-2">Tags:</div>

      <div className="inline-flex items-center gap-1 bg-green-100 px-2 py-1 rounded text-green-700 text-xs font-medium">
        Non-Visited Cx: Booked
      </div>

      <div className="mt-auto" />
    </aside>
  );
}

export default function CallDetails() {
  // In real app: fetch call details using ID from URL
  const name = "Parviz Sahbaee";
  const phone = "408-482-6550";

  return (
    <>
      {/* LEFT COLUMN: sidebar with recent calls stays external, so this page displays only middle + right */}
      <main className="flex-1 flex flex-col overflow-auto p-10">
        {/* Caller's Name */}
        <div className="text-2xl font-semibold mb-6">{name}</div>

        {/* Title */}
        <div className="text-xl font-semibold mb-2">
          Inbound recorded call{" "}
          <span className="text-green-500 inline-block">👍</span>
          <span className="text-slate-400 inline-block ml-2">👎</span>
        </div>

        {/* Interaction details */}
        <div className="mb-4">
          <div className="font-semibold text-xs text-slate-600 mb-1">
            INTERACTION DETAILS
          </div>

          <div className="text-sm space-y-1">
            <div>
              <span className="font-medium">Date:</span> Nov 12 5:33pm
            </div>
            <div>
              <span className="font-medium">Tracking number:</span>{" "}
              Lead.Gen / AMJ Marketing / Main Area 669-201-9880
            </div>
            <div>
              <span className="font-medium">Duration:</span> 9m 27s
            </div>
            <div>
              <span className="font-medium">Agent:</span> Natalia MA
            </div>
            <div>
              <span className="font-medium">Source:</span> Direct
            </div>
          </div>
        </div>

        {/* Classification */}
        <div className="mt-6 mb-6">
          <div className="font-semibold text-xs text-slate-600 mb-1">
            CLASSIFICATION
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-1 bg-green-100 px-2 py-1 rounded text-green-700 text-xs font-medium">
              Non-Visited Cx: Booked
            </div>

            <button className="w-5 h-5 border rounded text-slate-500 flex items-center justify-center hover:bg-slate-50">
              +
            </button>

            {/* Tag examples */}
            <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-slate-600 text-xs">
              $ Value
            </div>
            <div className="inline-flex items-center gap-1 bg-slate-100 px-2 py-1 rounded text-slate-600 text-xs">
              Notes
            </div>
          </div>
        </div>

        {/* Waveform placeholder */}
        <div className="border rounded-md p-4 mb-6">
          <div className="w-full h-24 bg-blue-50 border border-blue-100 rounded-md mb-4">
            {/* waveform placeholder */}
          </div>

          {/* audio controls */}
          <div className="flex items-center gap-4 text-slate-700">
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-slate-100">
              ⏪
            </button>
            <button className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-slate-100">
              ▶️
            </button>
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-slate-100">
              1x
            </button>

            <div className="text-xs text-slate-400 ml-auto">00:00</div>

            <a className="text-xs text-sky-600 hover:underline" href="#">
              Download MP3
            </a>
          </div>
        </div>

        {/* Transcript */}
        <div>
          <div className="text-lg font-semibold mb-2">Transcript</div>

          <div className="text-sm mb-2 text-slate-600">
            This transcript is in: <b>Language Unavailable</b>
          </div>

          <div className="bg-white border rounded-md p-4 shadow-sm text-sm">
            <div className="mb-4">
              <span className="text-sky-600 font-semibold">Natalie:</span>{" "}
              Hello, this is Natalie. How may I help you?
            </div>

            <div>
              <span className="text-slate-600 font-semibold">Caller:</span>{" "}
              Hi, I need help with my refrigerator...
            </div>
          </div>
        </div>
      </main>

      {/* RIGHT SIDEBAR: lead details */}
      <LeadDetailsCard name={name} phone={phone} />
    </>
  );
}
