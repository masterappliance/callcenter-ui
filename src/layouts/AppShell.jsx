import Sidebar from '@/components/sidebar/Sidebar.jsx'

export default function AppShell({ children }) {
  return (
    <div className="h-screen flex bg-slate-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Top app bar */}
        <header className="h-12 border-b bg-white flex items-center px-4">
          <div className="font-semibold text-slate-800">Agent View</div>
          <div className="ml-4 text-xs text-slate-500">Call center UI shell</div>
        </header>

        <main className="flex-1 flex overflow-hidden">{children}</main>
      </div>
    </div>
  )
}
