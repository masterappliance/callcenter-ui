import React from "react";

export default function Messages() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-xl font-semibold mb-2">Messages</h1>
        <p className="text-slate-500 text-sm">
          This will be the SMS inbox with threads on the left and conversation on the right.
        </p>
      </div>
    </div>
  );
}
