import CallsList from '@/components/calls/CallsList.jsx'
import Dialer from '@/components/dialer/Dialer.jsx'

export default function DialerLayout() {
  return (
    <div className="flex h-full w-full overflow-hidden">

      {/* LEFT – calls list */}
      <div className="w-[300px] border-r bg-white">
        <CallsList />
      </div>

      {/* CENTER – dialer takes the full remaining space */}
      <div className="flex-1 flex justify-center items-start pt-10 overflow-auto">
        <Dialer />
      </div>

      {/* RIGHT – intentionally hidden */}
      {/* <div className="w-[360px] border-l bg-white"></div> */}

    </div>
  )
}
