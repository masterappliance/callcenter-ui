import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* =======================
   FILTERS PANEL
   ======================= */

function FiltersPanel({ onToggleFilters }) {
  const FilterBlock = ({ label }) => (
    <div className="mb-5">
      <div className="text-xs font-semibold text-slate-600 mb-1">{label}</div>
      <button className="w-full flex items-center justify-between h-9 px-3 border border-slate-200 bg-white rounded-md text-sm text-slate-600 hover:bg-slate-50">
        <span>Select</span>
        <span className="text-[10px] text-slate-400">▾</span>
      </button>
    </div>
  );

  return (
    <section className="w-80 border-r bg-white p-4 flex flex-col text-sm overflow-auto">
      {/* Top row: !!NAME!! / Dialer */}
      <div className="flex gap-2 mb-6">
        <button className="flex-1 h-8 rounded-full border border-slate-200 text-xs text-slate-500 bg-slate-50">
          Anna
        </button>
        <button className="flex-1 h-8 rounded-full border border-sky-500 text-xs text-sky-600 bg-sky-50 font-medium">
          Dialer
        </button>
      </div>

      {/* Header row with back + All Items */}
      <div className="flex items-center justify-between mb-6 text-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleFilters}
            className="h-7 px-2 rounded-full border flex items-center justify-center hover:bg-slate-50"
          >
            ← Calls
          </button>
        </div>

        <button className="px-3 py-1 rounded-full border bg-slate-50 hover:bg-slate-100 text-[11px]">
          All Items ▾
        </button>
      </div>

      <FilterBlock label="Interaction Type" />
      <FilterBlock label="Tracking Number" />
      <FilterBlock label="Tags" />
      <FilterBlock label="Agent" />
    </section>
  );
}

/* =======================
   RECENT CALLS LIST
   ======================= */

function LeftCallList({ onToggleFilters }) {
  const navigate = useNavigate();

  const items = [
    {
      id: 1,
      agent: "Natalia MA",
      name: "Parviz Sahbaee",
      phone: "408-482-6550",
      time: "5:33 pm",
      direction: "in",
    },
    {
      id: 2,
      agent: "Eugenia Manager",
      name: "Mom Saghezchi",
      phone: "408-887-6191",
      time: "5:16 pm",
      direction: "in",
    },
    {
      id: 3,
      agent: "Eugenia Manager",
      name: "Anaheim Ca",
      phone: "714-329-2005",
      time: "4:42 pm",
      direction: "both",
    },
    {
      id: 4,
      agent: "Eugenia Manager",
      name: "Bocanegra S.",
      phone: "760-390-0548",
      time: "4:41 pm",
      direction: "in",
    },
    {
      id: 5,
      agent: "Eugenia Manager",
      name: "San Jose Ca",
      phone: "408-205-7859",
      time: "3:33 pm",
      direction: "in",
    },
    {
      id: 6,
      agent: "Eugenia Manager",
      name: "Stomm Adam",
      phone: "315-333-0803",
      time: "3:00 pm",
      direction: "in",
    },
  ];

  const directionIcon = (d) => {
    if (d === "both")
      return <span className="text-[10px] text-sky-500">↔</span>;
    return <span className="text-[10px] text-green-500">⮕</span>;
  };

  return (
    <section className="w-80 border-r bg-white flex flex-col text-sm">
      {/* Top row: Anna / Dialer */}
      <div className="px-4 pt-3 pb-2 flex gap-2">
        <button className="flex-1 h-8 rounded-full border border-slate-200 text-xs text-slate-500 bg-slate-50">
          Anna
        </button>
        <button className="flex-1 h-8 rounded-full border border-sky-500 text-xs text-sky-600 bg-sky-50 font-medium">
          Dialer
        </button>
      </div>

      {/* Search + Filters icons */}
      <div className="px-4 pb-2 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-slate-50">
            🔍
          </button>
          <button
            onClick={onToggleFilters}
            className="w-7 h-7 rounded-full border flex items-center justify-center hover:bg-slate-50"
          >
            ⚙️
          </button>
        </div>
        <button className="px-3 py-1 rounded-full border bg-slate-50 hover:bg-slate-100 text-[11px]">
          All items ▾
        </button>
      </div>

      {/* Active */}
      <div className="px-4 py-2 border-t text-xs text-slate-500">
        <div className="font-semibold text-slate-600 mb-1">Active</div>
        <div className="h-4 text-slate-300 text-[11px]">—</div>
      </div>

      {/* Reviewed */}
      <div className="px-4 pt-2 pb-1 text-xs text-slate-500 border-t">
        <div className="font-semibold text-slate-600">Reviewed</div>
      </div>

      {/* Calls list */}
      <div className="flex-1 overflow-auto text-xs">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/call/${item.id}`)}
            className="px-4 py-3 border-b hover:bg-slate-50 cursor-pointer flex justify-between"
          >
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {directionIcon(item.direction)}
                <span className="text-[11px] text-slate-400">
                  {item.agent}
                </span>
              </div>
              <div className="font-medium text-slate-800 text-[13px]">
                {item.name}
              </div>
              <div className="text-[11px] text-slate-400">{item.phone}</div>
            </div>
            <div className="text-[11px] text-slate-400">{item.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =======================
   DIALER CARD
   ======================= */

function DialerCard() {
  const [recordOn, setRecordOn] = useState(false);

  return (
    <main className="flex-1 flex justify-center items-start pt-16 overflow-auto">
      <div className="w-full max-w-lg">
        <div className="h-24" />
        <div className="bg-white shadow-sm border rounded-lg px-8 py-6">
          {/* To */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              To:
            </label>
            <div className="inline-flex items-center gap-1 border rounded px-3 py-1.5 text-xs text-slate-600 bg-slate-50">
              External
              <span className="text-[9px] text-slate-400">▾</span>
            </div>
          </div>

          {/* Phone number */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full h-10 rounded border border-slate-200 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>

          {/* From */}
          <div className="mb-6">
            <label className="block text-xs font-semibold text-slate-500 mb-1">
              From:
            </label>
            <div className="relative">
              <select className="w-full h-10 rounded border border-slate-200 px-3 pr-8 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-sky-400 focus:border-sky-400">
                <option>
                  0 Appliance Repair Connect / Main Number 669-200-0706
                </option>
                <option>Google Ads – Appliances</option>
                <option>Yelp Listing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-[10px] text-slate-400">
                ▾
              </div>
            </div>
          </div>

          {/* Record toggle */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Record call
            </span>
            <button
              type="button"
              onClick={() => setRecordOn((v) => !v)}
              className={`w-10 h-5 rounded-full flex items-center px-0.5 transition ${
                recordOn ? "bg-sky-400" : "bg-slate-200"
              }`}
            >
              <span
                className={`w-4 h-4 bg-white rounded-full shadow transform transition ${
                  recordOn ? "translate-x-5" : ""
                }`}
              />
            </button>
          </div>

          <p className="text-[11px] text-slate-400 mb-6 leading-snug">
            You may need to inform recipients you are recording. Some
            jurisdictions require consent from both parties to record a
            conversation.
          </p>

          <button
            type="button"
            className="w-full h-10 rounded bg-slate-400 text-white text-sm font-medium hover:bg-slate-500 transition"
          >
            Place Call
          </button>
        </div>
      </div>
    </main>
  );
}

/* =======================
   PAGE EXPORT
   ======================= */

export default function AgentView() {
  const [showFilters, setShowFilters] = useState(false);

  const handleToggleFilters = () => setShowFilters((v) => !v);

  return (
    <>
      {showFilters ? (
        <FiltersPanel onToggleFilters={handleToggleFilters} />
      ) : (
        <LeftCallList onToggleFilters={handleToggleFilters} />
      )}

      <DialerCard />
    </>
  );
}
