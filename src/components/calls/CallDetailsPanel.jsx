// src/components/calls/CallDetailsPanel.jsx

import { useNavigate } from 'react-router-dom';
import { DialerIcon } from './CallsHeader.jsx';
import { IconTag, IconDollar, IconNote } from '../icons/SoftIcons.jsx';
// остальной импорт как был

export default function CallDetailsPanel({ call, onShowInteractions }) {
  const navigate = useNavigate();

  if (!call) {
    return (
      <div className="h-full flex items-center justify-center text-sm text-slate-400">
        Select a call from the list to view details.
      </div>
    );
  }

  const interactions = call.interactions || [call];
  const lastInteraction = interactions[0];
  const hasMultiple = interactions.length > 1;

  const title =
    lastInteraction.title ||
    (lastInteraction.direction === 'inbound'
      ? 'Inbound recorded call'
      : 'Outbound recorded call');

  return (
    <div className="h-full flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* HEADER BAR: contact name + actions + "More interactions" */}
      <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="text-[15px] font-semibold text-slate-800">
          {call.callerName || 'Unknown caller'}
        </div>

        <div className="flex items-center gap-2">
          {hasMultiple && (
            <button
              type="button"
              onClick={onShowInteractions}
              className="inline-flex items-center gap-1 text-[12px] text-primary hover:underline"
            >
              More interactions <span className="text-xs">→</span>
            </button>
          )}

         
          <CircleIconButton>
            <span className="text-[13px]">💬</span>
          </CircleIconButton>

          {/* Кнопка телефона – та же иконка, что у Dialer */}
          <CircleIconButton
            onClick={() => navigate('/dialer')}
            title="Open dialer"
          >
            <DialerIcon />
          </CircleIconButton>
        </div>
      </div>

      {/* дальше твой текущий контент панели, как был */}
      {/* ... */}
    </div>
  );
}


function CircleIconButton({ children, danger, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={
        'inline-flex h-8 w-8 items-center justify-center rounded-full border ' +
        (danger
          ? 'border-red-400 bg-red-50 text-red-500 hover:bg-red-100'
          : 'border-slate-200 bg-white text-slate-500 hover:bg-slate-50')
      }
    >
      {children}
    </button>
  );
}
