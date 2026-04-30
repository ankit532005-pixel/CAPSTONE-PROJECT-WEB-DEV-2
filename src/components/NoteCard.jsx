import { Link } from "react-router-dom";

export default function NoteCard({ note }) {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800 dark:border-gray-700">
        <h3 className="text-xl font-bold mb-2 truncate">{note.title || "Untitled"}</h3>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
          {note.content?.substring(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {note.tags?.map((tag, idx) => (
            <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <div className="text-xs text-gray-400 mt-2">
          {new Date(note.createdAt).toLocaleDateString()}
        </div>
      </div>
    </Link>
  );
}