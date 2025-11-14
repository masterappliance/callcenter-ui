// src/components/dialer/Dialer.jsx
import { useState } from 'react';
import { DialerIcon, IconWarning } from '@/components/icons/SoftIcons.jsx';

export default function Dialer() {
  const [phoneRaw, setPhoneRaw] = useState('');
  const [touched, setTouched] = useState(false);
  const [recordCall, setRecordCall] = useState(false);

  const digitsOnly = phoneRaw.replace(/\D/g, '');
  const isValid = digitsOnly.length === 10;

  const masked = formatPhone(digitsOnly);

  function handleChange(e) {
    const value = e.target.value || '';
    const digits = value.replace(/\D/g, '').slice(0, 10);
    setPhoneRaw(digits);
    if (!touched && digits.length > 0) {
      setTouched(true);
    }
  }

  function handleBlur() {
    if (!touched) setTouched(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTouched(true);
    if (!isValid) return;

    // later this will actually place a call
    // for now we just log
    console.log('Placing call to', digitsOnly);
  }

  return (
    <div className="w-full max-w-xl">
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <DialerIcon />
          </span>
          <h2 className="text-[16px] font-semibold text-slate-800">Dialer</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* To */}
          <div className="space-y-1">
            <label className="block text-[12px] font-medium text-slate-700">
              To:
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex items-center gap-1 px-3 h-8 rounded-md border border-slate-200 bg-slate-50 text-[12px] text-slate-700"
              >
                External
                <span className="text-[10px]">▾</span>
              </button>
            </div>
          </div>

          {/* Phone number */}
          <div className="space-y-1">
            <label className="block text-[12px] font-medium text-slate-700">
              Phone Number
            </label>
            <div className="relative">
              <input
                type="text"
                value={masked}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="xxx-xxx-xxxx"
                className={[
                  'w-full h-10 rounded-md border px-3 text-[13px] outline-none',
                  touched && !isValid
                    ? 'border-red-400 focus:ring-1 focus:ring-red-300'
                    : 'border-slate-200 focus:ring-1 focus:ring-blue-300',
                ].join(' ')}
              />
              {touched && !isValid && (
                <div className="absolute inset-y-0 right-3 flex items-center text-red-500">
                  <IconWarning />
                </div>
              )}
            </div>
            {touched && !isValid && (
              <p className="mt-1 text-[11px] text-red-500">
                Please enter a 10-digit phone number.
              </p>
            )}
          </div>

          {/* From */}
          <div className="space-y-1">
            <label className="block text-[12px] font-medium text-slate-700">
              From:
            </label>
            <button
              type="button"
              className="w-full h-10 rounded-md border border-slate-200 bg-slate-50 px-3 text-left text-[13px] text-slate-700 flex items-center justify-between"
            >
              <span>0 Appliance Repair Connect / Main Number</span>
              <span className="text-[10px] text-slate-400">▾</span>
            </button>
            <div className="mt-1 text-[11px] text-slate-400">
              669-200-0706
            </div>
          </div>

          {/* Record call toggle */}
          <div className="pt-2 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-slate-700">
                Record call
              </span>
              <button
                type="button"
                onClick={() => setRecordCall((v) => !v)}
                className={[
                  'relative inline-flex h-5 w-9 items-center rounded-full transition-colors',
                  recordCall ? 'bg-blue-500' : 'bg-slate-300',
                ].join(' ')}
              >
                <span
                  className={[
                    'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform',
                    recordCall ? 'translate-x-4' : 'translate-x-1',
                  ].join(' ')}
                />
              </button>
            </div>
            <p className="text-[11px] leading-snug text-slate-500">
              You may need to inform recipients you are recording. Some
              jurisdictions require consent from both parties to record a
              conversation.
            </p>
          </div>

          {/* Place Call button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!isValid}
              className={[
                'w-full h-10 rounded-md text-[13px] font-medium',
                isValid
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-slate-200 text-slate-500 cursor-not-allowed',
              ].join(' ')}
            >
              Place Call
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function formatPhone(digits) {
  if (!digits) return '';
  const part1 = digits.slice(0, 3);
  const part2 = digits.slice(3, 6);
  const part3 = digits.slice(6, 10);

  if (digits.length <= 3) return part1;
  if (digits.length <= 6) return `${part1}-${part2}`;
  return `${part1}-${part2}-${part3}`;
}
