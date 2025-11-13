import { Tag } from '@/components/ui/tag.jsx'

export default function LeadDetailsPanel({ call }) {
  return (
    <div className="h-full flex flex-col border-l">
      <div className="px-5 py-4 border-b">
        <div className="text-xs font-semibold text-slate-800">Lead details</div>
      </div>

      <div className="px-5 py-4 text-xs space-y-3 flex-1 overflow-auto">
        <div className="space-y-0.5">
          <div className="font-semibold text-slate-900">
            {call.callerName}{' '}
            <span className="text-emerald-500" title="Positive outcome">
              👍
            </span>
          </div>
          <div className="text-primary text-[11px]">{call.phone}</div>
          <div className="text-[11px] text-slate-500">{call.location}</div>
        </div>

        <div className="pt-2 space-y-1">
          <div className="text-[10px] uppercase text-slate-400 tracking-wide">
            Classification status
          </div>
          <div className="text-[11px] text-slate-700">{call.date}</div>
          <Tag variant="green">{call.classificationStatus}</Tag>
        </div>

        <div className="pt-4 space-y-1">
          <div className="text-[10px] uppercase text-slate-400 tracking-wide">
            Tags
          </div>
          <div className="flex flex-wrap gap-2">
            {call.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
