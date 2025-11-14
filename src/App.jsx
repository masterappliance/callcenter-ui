import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./layouts/AppShell.jsx";
import CallsLayout from "./pages/CallsLayout.jsx";
import DialerLayout from "./pages/DialerLayout.jsx";

// App.jsx (simplified example)

import CallsScreen from "./components/calls/CallsScreen.jsx";

function App() {
  return (
    <div className="h-screen flex bg-slate-100">
      {/* your sidebar etc */}
      <div className="flex-1 p-4">
        <CallsScreen />
      </div>
    </div>
  );
}

export default App;

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/calls" replace />} />

        {/* Calls view */}
        <Route path="/calls" element={<CallsLayout />} />
        <Route path="/calls/:id" element={<CallsLayout />} />

        {/* Dialer view */}
        <Route path="/dialer" element={<DialerLayout />} />
      </Routes>
    </AppShell>
  );
}
