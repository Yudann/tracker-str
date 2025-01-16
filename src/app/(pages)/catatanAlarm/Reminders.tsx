"use client";

import { useState, useEffect } from "react";
import localforage from "localforage";
import Cookies from "js-cookie";
import { format } from "date-fns";

export default function Reminders() {
  const [reminders, setReminders] = useState<
    { date: string; message: string }[]
  >([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [reminderMessage, setReminderMessage] = useState("");
  const username = Cookies.get("username");

  useEffect(() => {
    if (username) {
      // Load reminders based on username
      localforage
        .getItem<{ date: string; message: string }[]>(`reminders_${username}`)
        .then((savedReminders) => {
          if (savedReminders) {
            setReminders(savedReminders);
          }
        });
    }
  }, [username]);

  const addReminder = async () => {
    if (selectedDate && reminderMessage.trim()) {
      const updatedReminders = [
        ...reminders,
        { date: selectedDate, message: reminderMessage },
      ];
      setReminders(updatedReminders);
      setSelectedDate("");
      setReminderMessage("");
      if (username) {
        await localforage.setItem(`reminders_${username}`, updatedReminders);
      }
    }
  };

  const deleteReminder = async (index: number) => {
    const updatedReminders = reminders.filter((_, i) => i !== index);
    setReminders(updatedReminders);
    if (username) {
      await localforage.setItem(`reminders_${username}`, updatedReminders);
    }
  };

  return (
    <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Pengingat</h2>
      <div className="flex flex-col gap-4 mb-4">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-purple-500"
        />
        <input
          type="text"
          value={reminderMessage}
          onChange={(e) => setReminderMessage(e.target.value)}
          placeholder="Isi pesan pengingat..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-purple-500"
        />
        <button
          onClick={addReminder}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Tambah Pengingat
        </button>
      </div>
      <ul>
        {reminders.map((reminder, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b"
          >
            <span>
              {format(new Date(reminder.date), "dd MMM yyyy")} -{" "}
              {reminder.message}
            </span>
            <button
              onClick={() => deleteReminder(index)}
              className="text-red-500 hover:underline"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
