import { useLocation } from 'react-router-dom';
import Sidebar from '@/components/sidebar/Sidebar.jsx';

export default function AppShell({ children }) {
  const location = useLocation();

  // We don't want the top header on the calls screen
  const showHeader = !location.pathname.startsWith('/calls');

  return (
    <div className="h-screen flex bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Top app bar - only when we actually want it */}
        {showHeader && (
          <header className="h-12 border-b bg-white flex items-center px-4">
            <div className="font-semibold text-slate-800">Agent View</div>
            <div className="ml-4 text-xs text-slate-500">
              Call center UI shell
            </div>
          </header>
        )}

        {/* Main content */}
        <main className="flex-1 flex overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
