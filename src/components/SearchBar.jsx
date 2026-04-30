import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search notes..."
      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}