// src/App.jsx

import AppShell from "./components/layout/AppShell.jsx"; // adjust path if needed
import CallsScreen from "./components/calls/CallsScreen.jsx";

function App() {
  return (
    <AppShell>
      <CallsScreen />
    </AppShell>
  );
}

export default App;
