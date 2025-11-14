export default function FilterPanel({ onCancel, onApply }) {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Content area */}
      <div className="flex-1 overflow-auto px-5 py-5 space-y-7 text-sm">
        <FilterSection title="Interaction Type" />
        <FilterSection title="Tracking Number" />
        <FilterSection title="Tags" />
        <FilterSection title="Agent" />
      </div>

      {/* Footer buttons */}
      <div className="px-5 py-3 border-t flex items-center justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="text-primary text-[13px] font-medium hover:underline"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onApply}
          className="h-8 px-4 rounded-md bg-primary text-white text-[13px] font-semibold shadow-sm hover:bg-primary/90"
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
      <h3 className="text-[13px] font-semibold text-slate-700 mb-2">
        {title}
      </h3>
      <button
        type="button"
        className="inline-flex h-8 min-w-[120px] border border-slate-300 rounded-full text-slate-700 text-[12px] px-3 items-center justify-between hover:bg-slate-50"
      >
        <span>Select</span>
        <span className="ml-2 text-[10px]">▾</span>
      </button>
    </div>
  );
}
