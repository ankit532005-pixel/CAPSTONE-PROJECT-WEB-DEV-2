import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote } from '../store/slices/notesslice'
import { fetchWikipediaSummary } from "../services/wikipediaAPI";
import { useDebounce } from "../hooks/useDebounce";

export default function NoteEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingNote = useSelector((state) =>
    state.notes.find((n) => n.id === id)
  );

  const [title, setTitle] = useState(existingNote?.title || "");
  const [content, setContent] = useState(existingNote?.content || "");
  const [tags, setTags] = useState(existingNote?.tags?.join(", ") || "");
  const [wikiData, setWikiData] = useState(null);
  const debouncedTitle = useDebounce(title, 500);

  useEffect(() => {
    if (debouncedTitle) {
      fetchWikipediaSummary(debouncedTitle).then(setWikiData);
    }
  }, [debouncedTitle]);

  const handleSave = () => {
    const note = {
      id: existingNote?.id || Date.now().toString(),
      title,
      content,
      tags: tags.split(",").map((t) => t.trim()),
      createdAt: existingNote?.createdAt || new Date().toISOString(),
      wiki: wikiData,
    };
    if (existingNote) {
      dispatch(updateNote({ id: note.id, updatedData: note }));
    } else {
      dispatch(addNote(note));
    }
    navigate("/");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-3xl font-bold mb-4 border-b dark:bg-transparent"
      />
      {wikiData && (
        <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded mb-4">
          📖 Wikipedia: {wikiData.extract?.substring(0, 200)}...
          <a href={wikiData.url} target="_blank" className="ml-2 text-blue-500">
            Read more
          </a>
        </div>
      )}
      <textarea
        rows="10"
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded dark:bg-gray-800"
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="w-full mt-4 border p-2 rounded dark:bg-gray-800"
      />
      <button
        onClick={handleSave}
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded"
      >
        Save Note
      </button>
    </div>
  );
}