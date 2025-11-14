export default function FilterPanel({ onCancel, onApply }) {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Content area scrollable if needed */}
      <div className="flex-1 overflow-auto px-6 py-6 space-y-8 text-sm">
        {/* Interaction Type */}
        <FilterSection title="Interaction Type" />

        {/* Tracking Number */}
        <FilterSection title="Tracking Number" />

        {/* Tags */}
        <FilterSection title="Tags" />

        {/* Agent */}
        <FilterSection title="Agent" />
      </div>

      {/* Footer buttons */}
      <div className="px-6 py-4 border-t flex items-center justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="text-primary text-sm font-medium hover:underline"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onApply}
          className="bg-primary text-white px-5 py-2 rounded-md text-sm font-semibold shadow-sm hover:bg-primary/90"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

function FilterSection({ title }) {
  return (
    <div>
      <h3 className="text-[13px] font-semibold text-slate-700 mb-2">{title}</h3>
      <button
        type="button"
        className="inline-flex h-9 min-w-[120px] border border-slate-300 rounded-full text-slate-700 text-sm px-4 items-center justify-between hover:bg-slate-50"
      >
        <span>Select</span>
        <span className="ml-2 text-[11px]">▾</span>
      </button>
    </div>
  );
}
