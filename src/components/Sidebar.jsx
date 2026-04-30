import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../store/slices/notesslice";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  return (
    <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-4 overflow-auto">
      <h2 className="text-xl font-bold mb-4">📝 My Notes</h2>
      <Link to="/note/new">
        <button className="w-full bg-blue-500 text-white py-2 rounded mb-4">
          + New Note
        </button>
      </Link>
      <div className="space-y-2">
        {notes.map((note) => (
          <div key={note.id} className="flex justify-between items-center">
            <Link to={`/note/${note.id}`} className="flex-1 truncate">
              {note.title || "Untitled"}
            </Link>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="text-red-500 ml-2"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
}