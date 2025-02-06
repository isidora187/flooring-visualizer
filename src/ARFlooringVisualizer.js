import React, { useState, useEffect } from "react";
import "@google/model-viewer";
import "./styles.css";

const flooringOptions = [
  { name: "LVT/SPC Vinil", glb: "/laminat-1.glb", usdz: "/laminat-1.usdz" },
  { name: "Patricia Laminat", glb: "/laminat-2.glb", usdz: "/laminat-2.usdz" },
  { name: "Amalfi Dvoslojni Parket", glb: "/laminat-3.glb", usdz: "/laminat-3.usdz" },
  { name: "Capri Dvoslojni Parket", glb: "/parket-1.glb", usdz: "/parket-1.usdz" },
  { name: "Kant-Tehno parket", glb: "/parket-2.glb", usdz: "/parket-2.usdz" },
  { name: "LVT/SPC Vinil Akra", glb: "/parket-3.glb", usdz: "/parket-3.usdz" },
  { name: "Parket Ribja Kost", glb: "/parket-4.glb", usdz: "/parket-4.usdz" },
  { name: "LVT/SPC Vinil Platano", glb: "/parket-5.glb", usdz: "/parket-5.usdz" },
  { name: "Talya Laminat", glb: "/parket-6.glb", usdz: "/parket-6.usdz" },
  { name: "Querica Antica Dvoslojni Parket", glb: "/parket-7.glb", usdz: "/parket-7.usdz" },
  { name: "Dark Parquet", glb: "/parket-8.glb", usdz: "/parket-8.usdz" },
  { name: "Lugano Laminat", glb: "/parket-9.glb", usdz: "/parket-9.usdz" },
  { name: "Fiordo dvoslojni parket", glb: "/parket-10.glb", usdz: "/parket-10.usdz" },
];

const ARFlooringVisualizer = () => {
  const [selectedFlooring, setSelectedFlooring] = useState(flooringOptions[0]);
  const [message, setMessage] = useState("");

  // Function to update messages based on AR status
  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");

    if (!modelViewer) return;

    const handleARStatus = (event) => {
      if (event.detail.status === "session-started") {
        setMessage(`This ${selectedFlooring.name} looks amazing in your home!`);
      } else if (event.detail.status === "not-presenting") {
        setMessage("");
      }
    };

    modelViewer.addEventListener("ar-status", handleARStatus);
    return () => modelViewer.removeEventListener("ar-status", handleARStatus);
  }, [selectedFlooring]);

  return (
    <div className="container">
      <h1>Ars Domus Flooring Visualizer</h1>

      {/* Dropdown to Select Flooring */}
      <label>Select Flooring:</label>
      <select
        onChange={(e) =>
          setSelectedFlooring(flooringOptions.find((f) => f.name === e.target.value))
        }
        value={selectedFlooring.name}
      >
        {flooringOptions.map((floor) => (
          <option key={floor.name} value={floor.name}>
            {floor.name}
          </option>
        ))}
      </select>

      {/* Model Viewer */}
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
        <button slot="ar-button" className="ar-button">View in AR</button>
      </model-viewer>

      {/* Legend Message */}
      {message && <div className="legend-message">{message}</div>}
    </div>
  );
};

export default ARFlooringVisualizer;
