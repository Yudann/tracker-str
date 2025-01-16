"use client";

import { useState, useEffect } from "react";
import localforage from "localforage";
import Cookies from "js-cookie";

export default function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState("");
  const username = Cookies.get("username");

  useEffect(() => {
    if (username) {
      // Load notes based on username
      localforage.getItem<string[]>(`notes_${username}`).then((savedNotes) => {
        if (savedNotes) {
          setNotes(savedNotes);
        }
      });
    }
  }, [username]);

  const addNote = async () => {
    if (newNote.trim()) {
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      setNewNote("");
      if (username) {
        await localforage.setItem(`notes_${username}`, updatedNotes);
      }
    }
  };

  const deleteNote = async (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    if (username) {
      await localforage.setItem(`notes_${username}`, updatedNotes);
    }
  };

  return (
    <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Catatan</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Tulis catatan baru..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-purple-500"
        />
        <button
          onClick={addNote}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Tambah
        </button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b"
          >
            <span>{note}</span>
            <button
              onClick={() => deleteNote(index)}
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
