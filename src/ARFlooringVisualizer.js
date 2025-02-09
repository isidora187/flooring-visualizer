import React, { useState, useEffect } from "react";
import "@google/model-viewer";
import Header from "./components/Header"; // Import the header component
import "./styles.css"; // Ensure styles are imported

const images = [
  "/image1.jpg",
  "/image1-1.jpg",
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  
];

const flooringOptions = [
  { name: "LVT/SPC Vinil",image: "/1304-BONEGA_caa6k6.png", code: "PRK100", price: "21.99 € / m2", glb: "/laminat-1.glb", usdz: "/laminat-1.usdz" },
  { name: "Patricia Laminat",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/laminat-2.glb", usdz: "/laminat-2.usdz" },
  { name: "Amalfi Dvoslojni Parket",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/laminat-3.glb", usdz: "/laminat-3.usdz" },
  { name: "Capri Dvoslojni Parket",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-1.glb", usdz: "/parket-1.usdz" },
  { name: "Kant-Tehno parket",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-2.glb", usdz: "/parket-2.usdz" },
  { name: "LVT/SPC Vinil Akra",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-3.glb", usdz: "/parket-3.usdz" },
  { name: "Parket Ribja Kost",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-4.glb", usdz: "/parket-4.usdz" },
  { name: "LVT/SPC Vinil Platano",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-5.glb", usdz: "/parket-5.usdz" },
  { name: "Talya Laminat", glb: "/parket-6.glb", usdz: "/parket-6.usdz" },
  { name: "Querica Antica Dvoslojni Parket",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-7.glb", usdz: "/parket-7.usdz" },
  { name: "Dark Parquet",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-8.glb", usdz: "/parket-8.usdz" },
  { name: "Lugano Laminat", glb: "/parket-9.glb", usdz: "/parket-9.usdz" },
  { name: "Fiordo dvoslojni parket",image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-10.glb", usdz: "/parket-10.usdz" },
  { name: "Merkur Laminat", image: "/laminat-1.jpg", code: "PRK100", price: "8.51 €", glb: "/laminat-1.glb", usdz: "/laminat-1.usdz" },
  { name: "Talya Laminat", image: "/laminat-2.jpg", code: "PRK508", price: "8.51 €", glb: "/laminat-2.glb", usdz: "/laminat-2.usdz" },
];

const ARFlooringVisualizer = () => {
  const [selectedFlooring, setSelectedFlooring] = useState(flooringOptions[0]);

  return (
    
    <div className="container">
      <Header />
      {/* Dropdown Selection */}
      <h1>Ars Domus Flooring Visualizer</h1>
      <p>Please select the floor your would like to try</p>
      <select
        onChange={(e) =>
          setSelectedFlooring(flooringOptions.find((f) => f.name === e.target.value))
        }
        value={selectedFlooring.name}
        className="floor-selector"
      >
        {flooringOptions.map((floor) => (
          <option key={floor.name} value={floor.name}>
            {floor.name}
          </option>
        ))}
      </select>

      {/* AR Model Viewer */}
      <model-viewer
      
        src={selectedFlooring.glb}
        ios-src={selectedFlooring.usdz}
        alt="Ars Domus Flooring"
        ar
        ar-modes="scene-viewer quick-look"
        camera-controls
        auto-rotate
        className="model-viewer"
      >
        <div className="watermark">
    <img src="/logo-ars-domus110.png" alt="Ars Domus Logo" />
  </div>
        <button slot="ar-button" className="ar-button">View in AR</button>
      </model-viewer>

      {/* Selected Product Details */}
      <div className="selected-product">
        <img src={selectedFlooring.image} alt={selectedFlooring.name} className="selected-product-image" />
        <div className="selected-product-info">
          <h2>{selectedFlooring.name}</h2>
          <p className="product-code">Code: {selectedFlooring.code}</p>
          <p className="price">{selectedFlooring.price}</p>
          <a href={`/product/${selectedFlooring.code}`} className="view-more">Poglej več &gt;</a>
        </div>
      </div>
      {/* Image Carousel */}
      <div className="carousel-container">
        <div className="carousel-track">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`Floor ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ARFlooringVisualizer;