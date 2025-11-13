import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AgentView from "./pages/AgentView.jsx";
import Calls from "./pages/Calls.jsx";
import Messages from "./pages/Messages.jsx";
import Contacts from "./pages/Contacts.jsx";
import Settings from "./pages/Settings.jsx";
import TeamView from "./pages/TeamView.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/agent" replace />} />
        <Route path="/agent" element={<AgentView />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team" element={<TeamView />} />
      </Routes>
    </Layout>
  );
}
