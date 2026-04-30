import { useSelector } from "react-redux";
import DashboardCharts from "../components/DashboardCharts";

export default function DashboardPage() {
  const notes = useSelector((state) => state.notes);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
      <DashboardCharts notes={notes} />
    </div>
  );
}