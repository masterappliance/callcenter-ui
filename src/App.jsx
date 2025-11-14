// src/App.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './layouts/AppShell.jsx';
import CallsLayout from './pages/CallsLayout.jsx';
import DialerLayout from './pages/DialerLayout.jsx';

export default function App() {
  return (
    <AppShell>
      <Routes>
        {/* Default: open dialer (with left panel) */}
        <Route path="/" element={<Navigate to="/dialer" replace />} />

        {/* Calls history / details view (if you open it directly) */}
        <Route path="/calls" element={<CallsLayout />} />
        <Route path="/calls/:id" element={<CallsLayout />} />

        {/* Dialer view (with left recent calls panel) */}
        <Route path="/dialer" element={<DialerLayout />} />
      </Routes>
    </AppShell>
  );
}
