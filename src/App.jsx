import { Routes, Route, Navigate } from 'react-router-dom'
import AppShell from './layouts/AppShell.jsx'
import CallsPage from './pages/CallsPage.jsx'

export default function App() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<Navigate to="/calls" replace />} />
        <Route path="/calls" element={<CallsPage />} />
        <Route path="/calls/:id" element={<CallsPage />} />
      </Routes>
    </AppShell>
  )
}
