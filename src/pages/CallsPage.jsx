import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { calls } from '@/lib/dummyData.js'
import CallList from '@/components/calls/CallList.jsx'
import CallDetails from '@/components/calls/CallDetails.jsx'
import LeadDetailsPanel from '@/components/calls/LeadDetailsPanel.jsx'

export default function CallsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const selectedId = id || null
  const selectedCall = calls.find(c => c.id === selectedId) || null

  // If someone lands on /calls and you want to auto-select first call:
  // useEffect(() => { if (!selectedId && calls[0]) navigate(`/calls/${calls[0].id}`, { replace: true }) }, [selectedId])

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Left: Calls list */}
      <section className="w-80 border-r bg-white flex flex-col overflow-hidden">
        <CallList
          calls={calls}
          selectedId={selectedId}
          onSelect={callId => navigate(`/calls/${callId}`)}
        />
      </section>

      {/* Center: Call details */}
      <section className="flex-1 border-r bg-white flex flex-col overflow-hidden">
        {selectedCall ? (
          <CallDetails call={selectedCall} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-sm text-slate-400">
            Select a call from the list to view details.
          </div>
        )}
      </section>

      {/* Right: Lead details */}
      <section className="w-80 bg-white flex-shrink-0 border-l">
        {selectedCall && <LeadDetailsPanel call={selectedCall} />}
      </section>
    </div>
  )
}
