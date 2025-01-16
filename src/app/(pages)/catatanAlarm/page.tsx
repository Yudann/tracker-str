"use client";

import { useState } from "react";
import Notes from "./Notes";
import Reminders from "./Reminders";

export default function NotesAndReminderPage() {
  const [activeTab, setActiveTab] = useState<"notes" | "reminder">("notes");

  return (
    <div className="w-full h-fit mt-20 p-6 flex flex-col items-center">
      {/* Tab Navigation */}
      <div className="flex w-full justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "notes" ? "bg-purple-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("notes")}
        >
          Catatan
        </button>
        <button
          className={`px-6 py-2 rounded-lg ${
            activeTab === "reminder"
              ? "bg-purple-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("reminder")}
        >
          Pengingat
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "notes" && <Notes />}
      {activeTab === "reminder" && <Reminders />}
    </div>
  );
}
