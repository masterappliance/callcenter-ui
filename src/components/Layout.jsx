import React from "react";
import SidebarIcons from "./SidebarIcons.jsx";
import HeaderBar from "./HeaderBar.jsx";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-800">
      <HeaderBar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarIcons />
        <div className="flex-1 flex overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
