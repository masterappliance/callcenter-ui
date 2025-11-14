import { useState } from "react";
import {
  IconWarning,
  IconMic,
  IconTransfer,
  IconMessage,
  IconHangup,
  IconTag,
  IconDollar,
  IconNote,
} from "../icons/SoftIcons.jsx";

export default function DialerPanel() {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);

  const [callStarted, setCallStarted] = useState(false);
  const [showKeypad, setShowKeypad] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [dtmf, setDtmf] = useState("");

  const digits = phone.replace(/\D/g, "");
  const hasDigits = digits.length > 0;
  const isValid = digits.length === 10;
  const showError = touched && hasDigits && !isValid;

  function formatPhone(raw) {
    const onlyDigits = raw.replace(/\D/g, "").slice(0, 10);
    if (onlyDigits.length <= 3) return onlyDigits;
    if (onlyDigits.length <= 6) {
      return `${onlyDigits.slice(0, 3)}-${onlyDigits.slice(3)}`;
    }
    return `${onlyDigits.slice(0, 3)}-${onlyDigits.slice(
      3,
      6
    )}-${onlyDigits.slice(6)}`;
  }

  function handlePhoneChange(e) {
    const value = e.target.value;
    setPhone(formatPhone(value));
    if (!touched) setTouched(true);

    if (callStarted) {
      setCallStarted(false);
      setShowKeypad(false);
      setIsOnHold(false);
      setDtmf("");
    }
  }

  function handleBlur() {
    if (hasDigits) setTouched(true);
  }

  function handlePlaceCall() {
    setTouched(true);
    if (!isValid) return;

    setCallStarted(true);
    setShowKeypad(false);
    setIsOnHold(false);
    setDtmf("");
  }

  const inputBorderClasses = showError
    ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-1 focus:ring-red-200"
    : isValid && hasDigits
    ? "border-primary ring-1 ring-primary/40 shadow-[0_0_0_1px_rgba(37,99,235,0.4)]"
    : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary/30";

  const buttonEnabled = isValid;
  const placeButtonClasses = buttonEnabled
    ? "bg-primary hover:bg-primary/90 text-white cursor-pointer"
    : "bg-slate-300 text-white cursor-not-allowed";

  // BEFORE CALL
  if (!callStarted) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-8 py-7 h-full flex flex-col">
        <h2 className="text-sm font-semibold text-slate-800 mb-6">Dialer</h2>

        {/* To */}
        <div className="mb-4">
          <label className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-1">
            <span>To:</span>
            <button
              type="button"
              className="inline-flex items-center gap-1 px-2 h-6 rounded-full border border-slate-200 bg-slate-50 text-[11px] text-slate-700"
            >
              External
              <span>▾</span>
            </button>
          </label>

          <div className="relative">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhoneChange}
              onBlur={handleBlur}
              className={
                "w-full h-10 rounded-md px-3 text-sm text-slate-800 focus:outline-none " +
                inputBorderClasses
              }
            />
            {showError && (
              <span className="absolute inset-y-0 right-3 flex items-center text-red-400">
                <IconWarning />
              </span>
            )}
          </div>
        </div>

        {/* From */}
        <div className="mb-4">
          <label className="block text-[11px] font-medium text-slate-500 mb-1">
            From:
          </label>
          <button
            type="button"
            className="w-full h-10 rounded-md border border-slate-200 px-3 text-left text-sm text-slate-800 flex items-center justify-between hover:bg-slate-50"
          >
            <div className="flex flex-col leading-tight">
              <span className="truncate">
                0 Appliance Repair Connect / Main Number
              </span>
              <span className="text-[11px] text-slate-500">669-200-0706</span>
            </div>
            <span className="ml-2 text-slate-400">▾</span>
          </button>
        </div>

        {/* Record call */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[12px] font-medium text-slate-700">
              Record call
            </span>
            <Toggle />
          </div>
          <p className="text-[11px] text-slate-500 leading-snug">
            You may need to inform recipients you are recording. Some
            jurisdictions require consent from both parties to record a
            conversation.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePlaceCall}
          disabled={!buttonEnabled}
          className={
            "w-full h-10 rounded-md text-[13px] font-semibold mt-auto " +
            placeButtonClasses
          }
        >
          Place Call
        </button>
      </div>
    );
  }

  // CALL IN PROGRESS
  function handleKeypadClick(key) {
    setDtmf((prev) => prev + key);
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 bg-transparent flex flex-col">
        <div className="flex-1 bg-white rounded-xl border-2 border-emerald-400 shadow-sm px-8 py-5 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-sm font-semibold text-slate-800">
                Anna | Master Appliance
              </div>
              {isOnHold && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                  On hold
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <CircleIconButton>
                <IconTransfer />
              </CircleIconButton>
              <CircleIconButton>
                <IconMessage />
              </CircleIconButton>
              <CircleIconButton danger>
                <IconHangup />
              </CircleIconButton>
            </div>
          </div>

          {/* Title */}
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-lg font-semibold text-slate-800">
              Call in progress
            </h2>
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <span>👍</span>
              <span>👎</span>
            </div>
          </div>

          {/* Content: details or keypad */}
          {showKeypad ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-4">
              <input
                type="text"
                readOnly
                value={dtmf}
                className="h-9 w-48 rounded-md border border-primary/60 text-center text-sm text-slate-800 focus:outline-none"
              />

              <div className="grid grid-cols-3 gap-px border border-slate-200 bg-slate-200 text-sm text-slate-700">
                {[
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "*",
                  "0",
                  "#",
                ].map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleKeypadClick(key)}
                    className="h-14 w-16 bg-white hover:bg-slate-50 flex items-center justify-center"
                  >
                    {key}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              {/* Interaction details */}
              <section className="mb-6">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2">
                  Interaction details
                </div>
                <dl className="grid grid-cols-[120px,1fr] gap-y-1 text-[12px] text-slate-700">
                  <dt className="text-slate-400">Date:</dt>
                  <dd>Nov 13 7:54pm</dd>

                  <dt className="text-slate-400">Tracking number:</dt>
                  <dd>
                    0 Appliance Repair Connect / Main Number / Website+HCP
                    669-200-0706
                  </dd>

                  <dt className="text-slate-400">Duration:</dt>
                  <dd className="text-primary font-medium">
                    This call is in progress.
                  </dd>

                  <dt className="text-slate-400">Agent:</dt>
                  <dd>Anna Zubenko</dd>

                  <dt className="text-slate-400">Source:</dt>
                  <dd>Direct</dd>

                  <dt className="text-slate-400">Landing page:</dt>
                  <dd className="text-primary">master-appliance.com/</dd>
                </dl>
              </section>

              {/* Classification */}
              <section className="mb-6">
                <div className="flex items-center gap-1 mb-2">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Classification
                  </div>
                  <span className="text-slate-300 text-xs">?</span>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  <PillButton icon={<IconTag />}>Add tags</PillButton>
                  <PillButton icon={<IconDollar />}>Value</PillButton>
                  <PillButton icon={<IconNote />}>Notes</PillButton>
                </div>
              </section>
            </div>
          )}

          {/* Bottom controls */}
          <div className="pt-3 mt-auto border-t border-slate-200 flex items-center justify-between text-[12px]">
            <div className="flex items-center gap-2 text-slate-600">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300">
                <IconMic />
              </span>
              <span>
                <span>Call Quality: </span>
                <span className="text-emerald-600 font-medium">Good</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowKeypad((prev) => !prev)}
                className="text-primary text-[12px] hover:underline"
              >
                {showKeypad ? "Hide keypad" : "Show keypad"}
              </button>
              <button
                type="button"
                onClick={() => setIsOnHold((prev) => !prev)}
                className="min-w-[72px] h-8 rounded-md bg-primary text-white text-[12px] font-medium hover:bg-primary/90"
              >
                {isOnHold ? "Resume" : "Hold"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <button
      type="button"
      className="relative inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-slate-300"
    >
      <span className="inline-block h-4 w-4 rounded-full bg-white shadow translate-x-[18px]" />
    </button>
  );
}

function CircleIconButton({ children, danger }) {
  return (
    <button
      type="button"
      className={
        "inline-flex h-8 w-8 items-center justify-center rounded-full border " +
        (danger
          ? "border-red-400 bg-red-50 text-red-500 hover:bg-red-100"
          : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50")
      }
    >
      {children}
    </button>
  );
}

function PillButton({ icon, children }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-1 px-3 h-7 rounded-full border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
    >
      <span className="text-slate-400">{icon}</span>
      <span>{children}</span>
    </button>
  );
}
