import { useState, useRef, useEffect } from "react";

export default function CallsHeader() {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState<"online" | "offline">("online");
  const statusRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target)
      ) {
        setIsStatusOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOnline = status === "online";

  return (
    <div className="relative bg-white border-b">
      {/* Top row: agent status + dialer + filters */}
      <div className="h-14 px-4 flex items-center justify-between gap-3">
        {/* Left: Anna + Dialer */}
        <div className="flex items-center gap-2">
          {/* Anna with status */}
          <div className="relative" ref={statusRef}>
            <button
              type="button"
              onClick={() => setIsStatusOpen((prev) => !prev)}
              className={[
                "px-3 h-8 rounded-full flex items-center gap-2 text-[12px] font-medium",
                "border border-slate-200 bg-slate-50 hover:bg-slate-100",
              ].join(" ")}
            >
              <span
                className={[
                  "h-2.5 w-2.5 rounded-full border",
                  isOnline
                    ? "bg-emerald-500 border-emerald-500"
                    : "bg-slate-300 border-slate-300",
                ].join(" ")}
              />
              <span>Anna</span>
            </button>

            {/* Status dropdown */}
            {isStatusOpen && (
              <div className="absolute left-0 mt-2 w-72 rounded-lg border border-slate-200 bg-white shadow-lg z-30">
                <div className="px-5 py-4 space-y-4 text-sm text-slate-800">
                  {/* Online */}
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("online");
                      setIsStatusOpen(false);
                    }}
                    className="w-full text-left flex items-start gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <div>
                      <div className="font-semibold">Online</div>
                      <div className="mt-0.5 text-[12px] text-slate-500">
                        Available to accept inbound interactions and transfers,
                        and active in any call queues you are part of.
                      </div>
                    </div>
                  </button>

                  {/* Offline */}
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("offline");
                      setIsStatusOpen(false);
                    }}
                    className="w-full text-left flex items-start gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <div>
                      <div className="font-semibold">Offline</div>
                      <div className="mt-0.5 text-[12px] text-slate-500">
                        Not available to accept inbound interactions or
                        transfers, but can still place outbound interactions.
                      </div>
                    </div>
                  </button>
                </div>

                <div className="border-t border-slate-200 text-sm">
                  <div className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">🏢</span>
                      <span className="text-slate-800">Master Appliance</span>
                    </div>
                    <button className="text-primary text-sm font-medium">
                      Update
                    </button>
                  </div>
                  <div className="flex items-center justify-between px-5 py-3 hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">⚙️</span>
                      <span className="text-slate-800">Audio Settings</span>
                    </div>
                    <button className="text-primary text-sm font-medium">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dialer button with outgoing-call icon */}
          <button
            type="button"
            // TODO: hook this up to navigate to your dialer route, e.g. navigate("/dialer")
            className="px-4 h-8 rounded-full border border-slate-200 bg-white text-[12px] text-slate-700 flex items-center gap-2 shadow-[0_0_0_1px_rgba(148,163,184,0.4)]"
          >
            {/* Outgoing call icon */}
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  d="M6.75 3.75h6.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.28.53L11.31 4.81l-3.1 3.1a.75.75 0 0 1-1.06-1.06l3.1-3.1L7.28 4.53A.75.75 0 0 1 6.75 4.5v-0.75zM7 10a9 9 0 0 0 9 9 1.5 1.5 0 0 0 1.5-1.34l.26-2a1.5 1.5 0 0 0-.9-1.57l-2.19-.88a1.5 1.5 0 0 0-1.73.43l-.7.87a5.5 5.5 0 0 1-2.57-2.57l.87-.7a1.5 1.5 0 0 0 .43-1.73l-.88-2.19A1.5 1.5 0 0 0 7.34 6.5l-2 .26A1.5 1.5 0 0 0 4 8 9 9 0 0 0 13 17"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span>Dialer</span>
          </button>
        </div>

        {/* Right: filters + all items (unchanged for now) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-3 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600 hover:bg-slate-50 flex items-center gap-1"
          >
            <span>Filters</span>
            <span>▾</span>
          </button>
          <button
            type="button"
            className="px-3 h-7 rounded-md border border-slate-200 text-[11px] text-slate-600 hover:bg-slate-50 flex items-center gap-1"
          >
            <span>All items</span>
            <span>▾</span>
          </button>
        </div>
      </div>
    </div>
  );
}
