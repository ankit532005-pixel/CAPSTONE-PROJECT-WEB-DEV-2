import { useEffect, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";

export default function GraphView({ notes }) {
  const graphData = {
    nodes: notes.map((note) => ({ id: note.id, name: note.title || "Untitled" })),
    links: [],
  };

  // Simple linking: if note.content includes another note's title
  notes.forEach((note) => {
    notes.forEach((other) => {
      if (
        note.id !== other.id &&
        note.content?.toLowerCase().includes(other.title?.toLowerCase())
      ) {
        graphData.links.push({ source: note.id, target: other.id });
      }
    });
  });

  return (
    <div className="h-96 border rounded">
      <ForceGraph2D
        graphData={graphData}
        nodeLabel="name"
        nodeAutoColorBy="id"
        linkDirectionalParticles={2}
      />
    </div>
  );
}