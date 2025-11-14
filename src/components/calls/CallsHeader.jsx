import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function CallsHeader() {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [status, setStatus] = useState("online"); // "online" | "offline"
  const statusRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isDialerActive = location.pathname.startsWith("/dialer");
  const isOnline = status === "online";

  // Close status dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (statusRef.current && !statusRef.current.contains(e.target)) {
        setIsStatusOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white border-b">
      {/* TOP ROW: Anna (left) ---- Dialer (right) */}
      <div className="h-14 px-4 flex items-center justify-between">
        {/* LEFT: Anna */}
        <div className="relative" ref={statusRef}>
          <button
            type="button"
            onClick={() => setIsStatusOpen((prev) => !prev)}
            className="px-3 h-8 rounded-full flex items-center gap-2 text-[12px] font-medium bg-primary text-white shadow-sm"
          >
            <span
              className={[
                "h-2.5 w-2.5 rounded-full border",
                isOnline
                  ? "bg-emerald-400 border-emerald-400"
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
                      and active in call queues.
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
                      Not available to accept inbound calls, but can place
                      outbound.
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

        {/* RIGHT: Dialer */}
        <button
          type="button"
          onClick={() => navigate("/dialer")}
          className={[
            "px-4 h-8 rounded-full flex items-center gap-2 text-[12px] border shadow-sm",
            isDialerActive
              ? "bg-primary/10 border-primary text-primary"
              : "bg-white border-slate-200 text-slate-700",
          ].join(" ")}
        >
          <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary/10 text-primary">
            {/* outbound call icon */}
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M7 3h6.5a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V5.71l-7.15 7.14a.5.5 0 0 1-.7-.7L12.29 5H7a.5.5 0 0 1 0-1z"
                fill="currentColor"
              />
              <path
                d="M7 10a9 9 0 0 0 9 9c.8 0 1.45-.59 1.55-1.38l.25-2a1.5 1.5 0 0 0-.89-1.57l-2.2-.88a1.5 1.5 0 0 0-1.73.43l-.7.87a5.5 5.5 0 0 1-2.57-2.57l.87-.7a1.5 1.5 0 0 0 .43-1.73l-.88-2.2A1.5 1.5 0 0 0 7.37 6.2l-2 .25A1.5 1.5 0 0 0 4 7.99 9 9 0 0 0 13 17"
                fill="currentColor"
              />
            </svg>
          </span>
          <span>Dialer</span>
        </button>
      </div>
    </div>
  );
}

export default CallsHeader;
