import { useEffect } from "react";

export default function FilterDrawer({ open, onClose }) {
  // Disable scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex">

      {/* BACKDROP */}
      <div
        className="flex-1 bg-black/20 backdrop-blur-[1px]"
        onClick={onClose}
      />

      {/* DRAWER */}
      <div className="w-[420px] bg-white h-full shadow-xl border-l border-slate-200 flex flex-col">
        <div className="px-6 py-5 border-b">
          <h2 className="text-lg font-semibold text-slate-800">Filters</h2>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 text-sm">
          {/* Interaction Type */}
          <div>
            <h3 className="text-[13px] font-semibold text-slate-700 mb-2">
              Interaction Type
            </h3>
            <Selector label="Select" />
          </div>

          {/* Tracking Number */}
          <div>
            <h3 className="text-[13px] font-semibold text-slate-700 mb-2">
              Tracking Number
            </h3>
            <Selector label="Select" />
          </div>

          {/* Tags */}
          <div>
            <h3 className="text-[13px] font-semibold text-slate-700 mb-2">
              Tags
            </h3>
            <Selector label="Select" />
          </div>

          {/* Agent */}
          <div>
            <h3 className="text-[13px] font-semibold text-slate-700 mb-2">
              Agent
            </h3>
            <Selector label="Select" />
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-primary text-sm font-medium hover:underline"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="bg-primary text-white px-5 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-primary/90"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function Selector({ label }) {
  return (
    <button
      type="button"
      className="h-9 w-40 border border-slate-300 rounded-full text-slate-700 text-sm px-4 flex items-center justify-between hover:bg-slate-50"
    >
      <span>{label}</span>
      <span>▾</span>
    </button>
  );
}
