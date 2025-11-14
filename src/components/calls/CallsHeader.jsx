// src/components/calls/CallsHeader.jsx
import { useNavigate, useLocation } from 'react-router-dom';

export default function CallsHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const onDialerPage = location.pathname.startsWith('/dialer');

  return (
    <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-white">
      {/* Anna слева */}
      <button
        type="button"
        className="inline-flex items-center gap-2 text-[12px] text-slate-700"
      >
        <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
          <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white" />
          <span className="text-[11px] font-semibold">A</span>
        </span>
        <span className="font-medium">Anna</span>
      </button>

      {/* Dialer справа */}
      <button
        type="button"
        onClick={() => navigate('/dialer')}
        className={[
          'inline-flex items-center gap-2 px-3 h-8 rounded-md border text-[12px]',
          onDialerPage
            ? 'border-blue-500 bg-blue-50 text-blue-700'
            : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50',
        ].join(' ')}
      >
        <DialerIcon />
        <span>Dialer</span>
      </button>
    </div>
  );
}

export function DialerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M7.5 4.5c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-.9.9c.8 1.5 2 2.7 3.5 3.5l.9-.9c.4-.4 1-.4 1.4 0l1.6 1.6c.4.4.4 1 0 1.4l-1 1c-.7.7-1.8.9-2.7.5-2.4-1-4.8-3.4-5.8-5.8-.4-.9-.2-2 .5-2.7l1-1Z"
      />
    </svg>
  );
}
