export default function CallListItem({ call, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={[
        'px-4 py-3 border-b cursor-pointer flex justify-between items-center',
        active ? 'bg-slate-100' : 'hover:bg-slate-50'
      ].join(' ')}
    >
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-1.5">
          <span className="h-5 w-5 flex items-center justify-center rounded-full border border-emerald-500 text-[10px] text-emerald-500">
            ↑
          </span>
          <span className="text-[11px] font-medium text-slate-800">
            {call.callerName}
          </span>
        </div>
        <div className="text-[11px] text-slate-500">{call.phone}</div>
      </div>
      <div className="text-[10px] text-slate-400">{call.time}</div>
    </div>
  )
}
