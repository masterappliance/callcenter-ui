import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function HeaderBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isAgentView = location.pathname.startsWith("/agent");
  const isTeamView = location.pathname.startsWith("/team");

  return (
    <header className="h-14 border-b bg-white flex items-center px-4">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
          MA
        </div>
        <span className="text-lg font-semibold tracking-tight">
          Call<span className="font-normal text-slate-500">Center</span>
        </span>
      </div>

      {/* Center tabs */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-6 text-sm">
          <button
            onClick={() => navigate("/agent")}
            className={`pb-1 ${
              isAgentView
                ? "border-b-2 border-sky-500 font-medium text-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Agent View
          </button>
          <button
            onClick={() => navigate("/team")}
            className={`pb-1 ${
              isTeamView
                ? "border-b-2 border-sky-500 font-medium text-slate-900"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            Team View
          </button>
        </div>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3 text-slate-500">
        <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-slate-50">
          💬
        </button>
        <button className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-slate-50">
          📞
        </button>
      </div>
    </header>
  );
}
