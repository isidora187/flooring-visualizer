import React, { useState } from "react";
import "@google/model-viewer";
import "./styles.css";

const flooringOptions = [
  { name: "LVT/SPC Vinil", glb: "/laminat-1.glb", usdz: "/laminat-1.usdz" },
  { name: "Patricia Laminat", glb: "/laminat-2.glb", usdz: "/laminat-2.usdz" },
  { name: "Amalfi Dvoslojni Parket", glb: "/laminat-3.glb", usdz: "/laminat-3.usdz" },
  { name: "Capri Dvoslojni Parket ", glb: "/parket-1.glb", usdz: "/parket-1.usdz" },
  { name: "Kant-Tehno parket", glb: "/parket-2.glb", usdz: "/parket-2.usdz" },
  { name: "LVT/SPC Vinil Akra", glb: "/parket-3.glb", usdz: "/parket-3.usdz" },
  { name: "Parket Ribja Kost", glb: "/parket-4.glb", usdz: "/parket-4.usdz" },
  { name: "LVT/SPC Vinil Platano", glb: "/parket-5.glb", usdz: "/parket-5.usdz" },
  { name: "Talya Laminat", glb: "/parket-6.glb", usdz: "/parket-6.usdz" },
  { name: "Querica Antica Dvoslojni Parket", glb: "/parket-7.glb", usdz: "/parket-7.usdz" },
  { name: "Dark Parquet", glb: "/parket-8.glb", usdz: "/parket-8.usdz" },
  { name: "Lugano Laminat", glb: "/parket-9.glb", usdz: "/parket-9.usdz" },
  { name: "Fiordo dvoslojni parket ", glb: "/parket-10.glb", usdz: "/parket-10.usdz" },
];

const messages = [
  "This floor looks amazing in your home! 🏡",
  "Great choice! It fits your space beautifully. ✨",
  "Your room just got a stylish upgrade! 🚀",
  "This flooring enhances the elegance of your home. 💎",
  "A perfect match! Your interior looks stunning. 🎨",
];

const ARFlooringVisualizer = () => {
  const [selectedFlooring, setSelectedFlooring] = useState(flooringOptions[0]);
  const [message, setMessage] = useState("");

  const handleARLoad = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);

    // Hide the message after 5 seconds
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div className="visualizer-container">
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
        onARTracking={handleARLoad} // Trigger message on AR start
      >
        <button slot="ar-button">View in AR</button>
      </model-viewer>

      {/* Message Box */}
      {message && <div className="message-box">{message}</div>}
    </div>
  );
};

export default ARFlooringVisualizer;
