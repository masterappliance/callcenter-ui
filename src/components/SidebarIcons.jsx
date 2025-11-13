import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const iconNav = [
  { id: "agent", emoji: "☎️", path: "/agent" },
  { id: "messages", emoji: "💬", path: "/messages" },
  { id: "calls", emoji: "📞", path: "/calls" },
  { id: "contacts", emoji: "👤", path: "/contacts" },
  { id: "settings", emoji: "⚙️", path: "/settings" },
];

export default function SidebarIcons() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="w-14 bg-slate-900 text-slate-200 flex flex-col items-center justify-between py-3">
      <div className="flex flex-col items-center gap-3">
        <button className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold">
          MA
        </button>

        {iconNav.map((item) => {
          const active = location.pathname.startsWith(item.path);
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg transition ${
                active ? "bg-slate-700" : "hover:bg-slate-800"
              }`}
            >
              <span>{item.emoji}</span>
            </button>
          );
        })}
      </div>

      <button className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xl hover:bg-slate-600">
        +
      </button>
    </aside>
  );
}
