import AudioPlayer from './AudioPlayer.jsx'
import { Tag } from '@/components/ui/tag.jsx'

export default function CallDetails({ call }) {
  return (
    <div className="flex flex-col h-full">
      {/* Top title bar like "Parviz Sahbaee" */}
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-sm font-semibold text-slate-900">
            {call.callerName}
          </div>
          <span className="text-xs text-emerald-500" title="Positive outcome">
            👍
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <button className="hover:text-slate-800">More interactions →</button>
        </div>
      </div>

      {/* Interaction details */}
      <div className="px-6 py-4 border-b text-xs space-y-3">
        <div className="font-semibold text-slate-800">Inbound recorded call</div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-8">
          <DetailRow label="Date" value={call.date} />
          <DetailRow label="Tracking number" value={call.trackingNumber} />
          <DetailRow label="Duration" value={call.duration} />
          <DetailRow label="Agent" value={call.agent} />
          <DetailRow label="Source" value={call.source} />
        </div>

        <div className="pt-2">
          <div className="flex items-center gap-1 text-[11px] text-slate-500 mb-1">
            <span className="font-medium text-slate-700">Classification</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {call.tags.map(tag => (
              <Tag key={tag} variant="green">
                {tag}
              </Tag>
            ))}
          </div>
        </div>

        <div className="pt-1 flex gap-2">
          {call.valueTags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
          {call.notesTags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      {/* Audio waveform */}
      <div className="px-6 py-4 border-b">
        <AudioPlayer />
      </div>

      {/* Transcript */}
      <div className="flex-1 overflow-auto px-6 py-4 text-xs">
        <div className="font-semibold text-slate-800 mb-2">Transcript</div>
        {call.transcriptSnippet ? (
          <div className="border rounded-md bg-slate-50 px-3 py-2 text-slate-700">
            <span className="font-medium">Natalia:</span>{' '}
            {call.transcriptSnippet}
          </div>
        ) : (
          <div className="text-slate-400">
            This transcript is unavailable or still processing.
          </div>
        )}
      </div>
    </div>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="text-[10px] uppercase tracking-wide text-slate-400">
        {label}
      </div>
      <div className="text-[11px] text-slate-700">{value}</div>
    </div>
  )
}
