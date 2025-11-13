export default function AudioPlayer() {
  return (
    <div className="flex flex-col gap-2">
      {/* Waveform placeholder */}
      <div className="h-20 w-full rounded-md bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 flex items-center justify-center text-[10px] text-slate-400">
        Audio waveform (placeholder)
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between text-[11px] text-slate-600">
        <div className="flex items-center gap-2">
          <button className="h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center">
            ▶︎
          </button>
          <button className="h-7 w-7 rounded-full border border-slate-200 flex items-center justify-center text-xs">
            1x
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-slate-400">00:00</span>
          <button className="text-[11px] text-primary hover:underline">
            Download MP3
          </button>
        </div>
      </div>
    </div>
  )
}
