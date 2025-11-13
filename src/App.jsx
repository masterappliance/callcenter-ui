import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./layouts/AppShell.jsx";
import CallsLayout from "./pages/CallsLayout.jsx";

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/calls" replace />} />
        {/* All call-related views live under /calls */}
        <Route path="/calls/*" element={<CallsLayout />} />
      </Routes>
    </AppShell>
  );
}
