import { useState } from "react";

export default function DialerPanel() {
  const [phone, setPhone] = useState("");
  const [touched, setTouched] = useState(false);
  const [callStarted, setCallStarted] = useState(false);

  const [showKeypad, setShowKeypad] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [dtmf, setDtmf] = useState("");

  // raw digits for validation
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

    // Call starts – move to "in progress" layout
    setCallStarted(true);
    setShowKeypad(false);
    setIsOnHold(false);
    setDtmf("");
    console.log("Placing call to:", digits);
  }

  // styling helpers
  const inputBorderClasses = showError
    ? "border-red-300 bg-red-50 focus:border-red-400 focus:ring-1 focus:ring-red-200"
    : isValid && hasDigits
    ? "border-primary ring-1 ring-primary/40 shadow-[0_0_0_1px_rgba(37,99,235,0.4)]"
    : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary/30";

  const buttonEnabled = isValid;
  const buttonClasses = buttonEnabled
    ? "bg-primary hover:bg-primary/90 text-white cursor-pointer"
    : "bg-slate-300 text-white cursor-not-allowed";

  if (!callStarted) {
    // INITIAL DIALER (before placing the call)
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-8 py-7 h-full flex flex-col">
        <h2 className="text-sm font-semibold text-slate-800 mb-6">Dialer</h2>

        {/* To: */}
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
                <WarningIcon />
              </span>
            )}
          </div>
        </div>

        {/* From: */}
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

        {/* Record call toggle */}
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
            buttonClasses
          }
        >
          Place Call
        </button>
      </div>
    );
  }

  // CALL IN PROGRESS VIEW (after Place Call)
  const statusText = isOnHold ? "On Hold" : "In progress";

  function handleKeypadClick(key) {
    setDtmf((prev) => prev + key);
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-8 py-6 h-full flex flex-col">
      {/* Header area: pretend call is with this lead */}
      <div className="mb-4">
        <div className="text-sm font-semibold text-slate-800">
          Anna | Master Appliance
        </div>
        <div className="text-[11px] text-slate-500">
          {formatPhone(phone || "3233337921")} · {statusText}
        </div>
      </div>

      {/* If keypad shown: center keypad + input, otherwise just empty center */}
      {showKeypad ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          {/* DTMF display */}
          <input
            type="text"
            readOnly
            value={dtmf}
            className="h-9 w-48 rounded-md border border-primary/60 text-center text-sm text-slate-800 focus:outline-none"
          />

          {/* Keypad grid */}
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
        <div className="flex-1" />
      )}

      {/* Bottom call controls – matches CallRail style */}
      <div className="border-t border-slate-200 pt-3 mt-4 flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-2 text-slate-600">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300">
            <MicIcon />
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
            className={
              "min-w-[70px] h-8 rounded-md border text-[12px] " +
              (isOnHold
                ? "border-amber-300 bg-amber-50 text-amber-700"
                : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50")
            }
          >
            {isOnHold ? "Resume" : "Hold"}
          </button>
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

function WarningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 4a1 1 0 0 1 .86.49l7 12A1 1 0 0 1 19 18H5a1 1 0 0 1-.86-1.51l7-12A1 1 0 0 1 12 4Zm0 4a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1Zm0 8a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 16Z"
      />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3a3 3 0 0 0-3 3v5a3 3 0 1 0 6 0V6a3 3 0 0 0-3-3Zm-1 14.93V20h-2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-2v-2.07A7 7 0 0 0 18 11a1 1 0 0 0-2 0 4 4 0 0 1-8 0 1 1 0 0 0-2 0 7 7 0 0 0 7 6.93Z"
      />
    </svg>
  );
}
