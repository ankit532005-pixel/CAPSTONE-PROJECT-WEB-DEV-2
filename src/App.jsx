import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "./store/slices/settingsSlice";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import NoteEditorPage from "./pages/NoteEditorPage";
import DashboardPage from "./pages/DashboardPage";
import GraphPage from "./pages/GraphPage";

function App() {
  const darkMode = useSelector((state) => state.settings.darkMode);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
              <div className="flex gap-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                <Link to="/graph" className="hover:underline">Graph</Link>
              </div>
              <button
                onClick={() => dispatch(toggleDarkMode())}
                className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? "🌙 Dark" : " ☀️ Light"}
              </button>
            </header>
            <main className="flex-1 overflow-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/note/:id" element={<NoteEditorPage />} />
                <Route path="/note/new" element={<NoteEditorPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/graph" element={<GraphPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;