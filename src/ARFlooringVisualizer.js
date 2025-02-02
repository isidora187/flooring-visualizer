import React, { useState } from "react";
import "@google/model-viewer";
import "./styles.css";

const flooringOptions = [
  { name: "Oak Wood", glb: "/flooring1.glb", usdz: "/flooring1.usdz" },
  { name: "Dark Walnut", glb: "/parquet-oak.glb", usdz: "/parquet-oak.usdz" },
  { name: "Gray Tile", glb: "/flooring-gray.glb", usdz: "/flooring-gray.usdz" },
  { name: "Marble", glb: "/flooring-marble.glb", usdz: "/flooring-marble.usdz" },
  { name: "Classic Pine", glb: "/flooring-pine.glb", usdz: "/flooring-pine.usdz" },
  // Add more flooring options here (up to 15)
];

const ARFlooringVisualizer = () => {
  const [selectedFlooring, setSelectedFlooring] = useState(flooringOptions[0]);

  return (
    <div>
      <h1>Ars Domus Flooring Visualizer</h1>

      {/* Dropdown to Select Flooring Type */}
      <label>Select Flooring:</label>
      <select
        onChange={(e) =>
          setSelectedFlooring(
            flooringOptions.find((f) => f.name === e.target.value)
          )
        }
        value={selectedFlooring.name}
      >
        {flooringOptions.map((floor) => (
          <option key={floor.name} value={floor.name}>
            {floor.name}
          </option>
        ))}
      </select>

      {/* Model Viewer with Dynamic src based on Selected Flooring */}
      <model-viewer
        src={selectedFlooring.glb}
        ios-src={selectedFlooring.usdz}
        alt="Lesni center Ars Domus"
        ar
        ar-modes="scene-viewer quick-look"
        camera-controls
        auto-rotate
        style={{ width: "100%", height: "500px" }}
      >
        <button slot="ar-button">View in AR</button>
      </model-viewer>
    </div>
  );
};

export default ARFlooringVisualizer;
