// src/components/calls/CallDetailsPanel.jsx

import {
  IconTag,
  IconDollar,
  IconNote,
} from "../icons/SoftIcons.jsx";

const MOCK_WAVEform_POINTS = new Array(80).fill(0).map((_, i) => {
  // simple pseudo-random-ish bar heights
  const base = (i % 7) + 2;
  return (base * 4) + (i % 3) * 6;
});

export default function CallDetailsPanel({ call }) {
  if (!call) {
    // empty state when nothing selected
    return (
      <div className="h-full flex items-center justify-center text-sm text-slate-400">
        Select a call from the list to view details.
      </div>
    );
  }

  // If you later add real interactions, you can pass call.interactions = [...]
  const interactions = call.interactions || [call];
  const lastInteraction = interactions[0];
  const hasMultiple = interactions.length > 1;

  const title =
    lastInteraction.title ||
    (lastInteraction.direction === "inbound"
      ? "Inbound recorded call"
      : "Outbound recorded call");

  return (
    <div className="h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* HEADER BAR: contact name + top-right icons */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="text-[15px] font-semibold text-slate-800">
          {call.callerName || "Unknown caller"}
        </div>
        <div className="flex items-center gap-2">
          {hasMultiple && (
            <button
              type="button"
              className="inline-flex items-center gap-1 text-[12px] text-primary hover:underline"
            >
              More interactions <span className="text-xs">→</span>
            </button>
          )}
          <CircleIconButton>
            {/* message bubble icon style (fake) */}
            <span className="text-[13px]">💬</span>
          </CircleIconButton>
          <CircleIconButton>
            {/* call icon style (fake) */}
            <span className="text-[13px]">☎️</span>
          </CircleIconButton>
        </div>
      </div>

      {/* MAIN SCROLL AREA */}
      <div className="flex-1 overflow-auto">
        <div className="px-6 pt-5 pb-6 space-y-6">
          {/* Title row: "Inbound recorded call" + thumbs */}
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-semibold text-slate-900">
              {title}
            </h2>
            <button
              type="button"
              className="text-slate-400 hover:text-slate-500 text-lg"
              title="Thumbs up"
            >
              👍
            </button>
            <button
              type="button"
              className="text-slate-400 hover:text-slate-500 text-lg"
              title="Thumbs down"
            >
              👎
            </button>
          </div>

          {/* INTERACTION DETAILS */}
          <section>
            <SectionHeader label="Interaction details" />
            <dl className="mt-2 grid grid-cols-[140px,1fr] gap-y-1 text-[13px]">
              <dt className="text-slate-400">Date:</dt>
              <dd className="text-slate-800">
                {lastInteraction.date || "Nov 13 9:20am"}
              </dd>

              <dt className="text-slate-400">Tracking number:</dt>
              <dd className="text-slate-800">
                {lastInteraction.trackingNumber ||
                  "Lead.Gen / eLocal / San Diego 619-383-3476"}
              </dd>

              <dt className="text-slate-400">Duration:</dt>
              <dd className="text-slate-800">
                {lastInteraction.duration || "2m 3s"}
              </dd>

              <dt className="text-slate-400">Agent:</dt>
              <dd className="text-slate-800">
                {lastInteraction.agent || "Yana MA"}
              </dd>

              <dt className="text-slate-400">Source:</dt>
              <dd className="text-slate-800">
                {lastInteraction.source ||
                  "Lead.Gen / eLocal / San Diego"}
              </dd>
            </dl>
          </section>

          {/* CLASSIFICATION */}
          <section>
            <SectionHeader label="Classification" />
            <div className="mt-2 space-y-2">
              <div className="text-[13px] text-slate-600">
                <span className="font-medium">Tags:</span>
              </div>

              {/* Example tag pill */}
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-50 border border-blue-200 text-[12px] text-blue-800 px-2.5 py-1"
                >
                  <span className="font-medium">
                    NQL: Job Not Served
                  </span>
                  <span className="text-xs">×</span>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-slate-300 text-slate-500 text-[13px] hover:bg-slate-50"
                  title="Add tag"
                >
                  +
                </button>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <PillButton icon={<IconDollar />}>Value</PillButton>
                <PillButton icon={<IconNote />}>Notes</PillButton>
              </div>
            </div>
          </section>

          {/* WAVEFORM + PLAYER */}
          <section className="pt-2 border-t border-slate-200">
            <Waveform />
            <div className="mt-4 flex items-center justify-between text-[12px] text-slate-500">
              <div className="flex items-center gap-2">
                <CircleIconButton>
                  <span className="text-[13px]">🔊</span>
                </CircleIconButton>
                <CircleIconButton>
                  <span className="text-[13px]">▶</span>
                </CircleIconButton>
                <CircleIconButton>
                  <span className="text-[11px] font-medium">1x</span>
                </CircleIconButton>
              </div>
              <div className="flex items-center gap-4">
                <span>00:00</span>
                <button
                  type="button"
                  className="text-primary hover:underline text-[12px]"
                >
                  Download MP3
                </button>
              </div>
            </div>
          </section>

          {/* TRANSCRIPT */}
          <section className="pt-4 border-t border-slate-200">
            <h3 className="text-[13px] font-semibold text-slate-800 mb-2">
              Transcript
            </h3>

            <div className="text-[12px] text-slate-500 mb-3">
              This transcript is in:{" "}
              <span className="font-semibold text-slate-800">
                English
              </span>
            </div>

            <div className="border border-slate-200 rounded-md bg-slate-50 px-4 py-3 text-[13px] leading-relaxed text-slate-700">
              <p className="font-semibold text-primary mb-2">
                All in appliance repair. How may I help you?
              </p>
              <p className="mb-2">
                Good morning. We have a Maytag gas stove with a broken
                oven door handle. Just the handle broken.
              </p>
              <p className="font-semibold mb-2">
                Okay, I see which.
              </p>
              <p className="mb-2">And I.</p>
              <p className="font-semibold mb-2">
                We can help you with that. To assign the technician, I
                need your zip code, please.
              </p>
              <p className="mb-2">Well, I have a question.</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────────── */
/* Small sub components          */
/* ───────────────────────────── */

function SectionHeader({ label }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="text-[11px] text-slate-500 flex items-center gap-1"
      >
        <span className="text-xs">▾</span>
        <span className="uppercase tracking-wide font-semibold">
          {label}
        </span>
      </button>
      {label.toLowerCase().includes("classif") && (
        <span className="inline-flex items-center justify-center h-4 w-4 rounded-full border border-slate-300 text-[9px] text-slate-400">
          ?
        </span>
      )}
    </div>
  );
}

function CircleIconButton({ children, danger }) {
  return (
    <button
      type="button"
      className={
        "inline-flex h-8 w-8 items-center justify-center rounded-full border " +
        (danger
          ? "border-red-400 bg-red-50 text-red-500 hover:bg-red-100"
          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50")
      }
    >
      {children}
    </button>
  );
}

function PillButton({ icon, children }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1 px-3 h-7 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
    >
      <span className="text-slate-400">{icon}</span>
      <span>{children}</span>
    </button>
  );
}

function Waveform() {
  return (
    <div className="mt-3">
      <div className="h-28 flex items-center justify-center">
        <div className="w-full flex items-center gap-[2px]">
          {MOCK_WAVEform_POINTS.map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/15 rounded-full"
              style={{ height: `${h / 4 + 8}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
