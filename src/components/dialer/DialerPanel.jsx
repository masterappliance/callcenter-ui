export default function DialerPanel() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-8 py-7">
      <h2 className="text-sm font-semibold text-slate-800 mb-6">Dialer</h2>

      {/* To: */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-1">
          <span>To:</span>
          <button
            type="button"
            className="inline-flex items-center gap-1 px-2 h-6 rounded-full border border-slate-200 bg-slate-50 text-[11px] text-slate-700"
          >
            External
            <span>▾</span>
          </button>
        </label>
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full h-9 rounded-md border border-slate-200 px-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-primary/60"
        />
      </div>

      {/* From: */}
      <div className="mb-4">
        <label className="block text-[11px] font-medium text-slate-500 mb-1">
          From:
        </label>
        <button
          type="button"
          className="w-full h-10 rounded-md border border-slate-200 px-3 text-left text-sm text-slate-800 flex items-center justify-between hover:bg-slate-50"
        >
          <div className="flex flex-col leading-tight">
            <span className="truncate">
              0 Appliance Repair Connect / Main Number
            </span>
            <span className="text-[11px] text-slate-500">669-200-0706</span>
          </div>
          <span className="ml-2 text-slate-400">▾</span>
        </button>
      </div>

      {/* Record call toggle */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[12px] font-medium text-slate-700">
            Record call
          </span>
          <Toggle disabled />
        </div>
        <p className="text-[11px] text-slate-500 leading-snug">
          You may need to inform recipients you are recording. Some
          jurisdictions require consent from both parties to record a
          conversation.
        </p>
      </div>

      {/* Place Call button */}
      <button
        type="button"
        className="w-full h-10 rounded-md bg-slate-300 text-[13px] font-semibold text-white cursor-not-allowed"
      >
        Place Call
      </button>
    </div>
  );
}

function Toggle({ disabled }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={[
        "relative inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-slate-200",
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer",
      ].join(" ")}
    >
      <span className="inline-block h-4 w-4 rounded-full bg-white shadow translate-x-0.5" />
    </button>
  );
}
