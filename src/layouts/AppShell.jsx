// src/layouts/AppShell.jsx
import Sidebar from '@/components/sidebar/Sidebar.jsx';

export default function AppShell({ children }) {
  return (
    <div className="h-screen flex bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top app bar – ALWAYS visible */}
        <header className="h-12 border-b bg-white flex items-center px-4 justify-between">
          <div className="flex items-baseline gap-3">
            <div className="font-semibold text-slate-800">Call Center</div>
            <div className="text-xs text-slate-500">Agent View</div>
          </div>

     
        </header>

        <main className="flex-1 flex overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
