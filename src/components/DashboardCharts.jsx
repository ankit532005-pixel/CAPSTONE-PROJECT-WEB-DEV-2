import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

export default function DashboardCharts({ notes }) {
  // Count notes per day (for demo, just count by created date)
  const dateCounts = notes.reduce((acc, note) => {
    const date = new Date(note.createdAt || Date.now()).toDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
  const barData = Object.entries(dateCounts).map(([date, count]) => ({ date, count }));

  // Tag frequency
  const tagFreq = {};
  notes.forEach((note) => {
    (note.tags || []).forEach((tag) => {
      tagFreq[tag] = (tagFreq[tag] || 0) + 1;
    });
  });
  const pieData = Object.entries(tagFreq).map(([name, value]) => ({ name, value }));
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="font-bold mb-2">Notes per Day</h3>
        <BarChart width={300} height={250} data={barData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h3 className="font-bold mb-2">Top Tags</h3>
        <PieChart width={300} height={250}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}