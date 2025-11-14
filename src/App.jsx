// src/App.jsx

import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./layouts/AppShell.jsx";
import CallsLayout from "./pages/CallsLayout.jsx";
import DialerLayout from "./pages/DialerLayout.jsx";

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
