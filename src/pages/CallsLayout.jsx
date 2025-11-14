import { useState, useMemo } from 'react';

import CallList from '@/components/calls/CallList.jsx';
import CallDetailsPanel from '@/components/calls/CallDetailsPanel.jsx';
import Dialer from '@/components/dialer/Dialer.jsx';

import callsData from '@/lib/dummyData.js';

export default function CallsLayout() {
  // нет выбранного звонка по умолчанию
  const [selectedId, setSelectedId] = useState(null);

  // что показываем в центре: 'dialer' или 'details'
  const [centerView, setCenterView] = useState('dialer');

  const calls = callsData;

  const selectedCall = useMemo(
    () => calls.find(c => String(c.id) === String(selectedId)) || null,
    [calls, selectedId]
  );

  // клик по звонку слева
  function handleSelectCall(id) {
    setSelectedId(id);
    setCenterView('details');
  }

  // клик по Dialer (рядом с Agent Status)
  function handleOpenDialer() {
    setCenterView('dialer');
    // если хочешь, можешь сбрасывать выбранный звонок:
    // setSelectedId(null);
  }

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* LEFT: список звонков */}
      <div className="w-[320px] border-r border-slate-200 bg-white">
        <CallList
          calls={calls}
          selectedId={selectedId}
          onSelect={handleSelectCall}
          onOpenDialer={handleOpenDialer}
        />
      </div>

      {/* CENTER: либо Dialer, либо детали звонка */}
      <div className="flex-1 bg-slate-50">
        {centerView === 'dialer' ? (
          <div className="h-full flex items-start justify-center pt-12">
            <div className="w-full max-w-xl">
              <Dialer />
            </div>
          </div>
        ) : selectedCall ? (
          <CallDetailsPanel call={selectedCall} />
        ) : (
          // fallback: если почему-то нет выбранного, показываем Dialer
          <div className="h-full flex items-start justify-center pt-12">
            <div className="w-full max-w-xl">
              <Dialer />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
