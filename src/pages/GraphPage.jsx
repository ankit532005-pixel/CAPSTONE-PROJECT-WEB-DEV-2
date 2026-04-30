import { useSelector } from "react-redux";
import GraphView from "../components/GraphView";

export default function GraphPage() {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Knowledge Graph</h2>
      <GraphView notes={notes} />
    </div>
  );
}