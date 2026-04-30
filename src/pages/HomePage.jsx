import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import NoteCard from "../components/NoteCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  const notes = useSelector((state) => state.notes);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date");

  let filteredNotes = notes.filter((note) =>
    note.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (filter !== "all") {
    filteredNotes = filteredNotes.filter((note) => note.tags?.includes(filter));
  }
  filteredNotes.sort((a, b) => {
    if (sortBy === "date") return new Date(b.createdAt) - new Date(a.createdAt);
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <SearchBar onSearch={setSearchTerm} />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded dark:bg-gray-700"
        >
          <option value="all">All Tags</option>
          <option value="react">React</option>
          <option value="redux">Redux</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded dark:bg-gray-700"
        >
          <option value="date">Sort by Date</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredNotes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}