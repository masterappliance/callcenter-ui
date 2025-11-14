// src/pages/DialerLayout.jsx
import Dialer from '@/components/dialer/Dialer.jsx';

export default function DialerLayout() {
  return (
    <div className="flex-1 flex items-start justify-center py-10 overflow-auto bg-slate-50">
      <Dialer />
    </div>
  );
}
