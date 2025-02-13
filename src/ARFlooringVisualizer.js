import React, { useState, useEffect } from "react";
import "@google/model-viewer";
import Header from "./components/Header"; // Import the header component
import "./styles.css"; // Ensure styles are imported
import Footer from "./components/Footer"; // Import the footer component

const images = [
  "/image1.jpg",
  "/image1-1.jpg",
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  
];

const flooringOptions = [
  { name: "LVT/SPC Vinil",image: "/1304-BONEGA_caa6k6.png", code: "PRK100", price: "21.99 € / m2", glb: "/laminat-1.glb", usdz: "/laminat-1.usdz",link:"/spc-vinil-talne-obloge/" },
  { name: "Patricia Laminat",image: "/Patricia1 (1).png", code: "PRK100", price: "8.51 €", glb: "/laminat-2.glb", usdz: "/laminat-2.usdz",link:"/patricia/" },
  { name: "Amalfi Dvoslojni Parket",image: "/BGP_GAIA_vesuvio_AMALFI_rr9snq.png", code: "PRK100", price: "8.51 €", glb: "/laminat-3.glb", usdz: "/laminat-3.usdz",link:"/amalfi-dvoslojni-parket-2/" },
  { name: "Capri Dvoslojni Parket",image: "/BGP_GAIA_vesuvio_CAPRI_ojlezq.png", code: "PRK100", price: "8.51 €", glb: "/parket-1.glb", usdz: "/parket-1.usdz",link:"/capri-dvoslojni-parket/" },
  { name: "Kant-Tehno parket",image: "/kant-ali-industrijski-parket-1.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-2.glb", usdz: "/parket-2.usdz",link:"/kant-tehno-parket/" },
  { name: "LVT/SPC Vinil Akra",image: "/akra-vinilspc.png", code: "PRK100", price: "8.51 €", glb: "/parket-3.glb", usdz: "/parket-3.usdz",link:"/akra/" },
  { name: "Parket Ribja Kost",image: "/GAIA_fiordo_doga_zvyfrh.jpg", code: "PRK100", price: "8.51 €", glb: "/parket-4.glb", usdz: "/parket-4.usdz",link:"/akra/" },
  { name: "LVT/SPC Vinil Platano",image: "/Vinil Platano.png", code: "PRK100", price: "8.51 €", glb: "/parket-5.glb", usdz: "/parket-5.usdz" ,link:"/platano/"},
  { name: "Talya Laminat",image: "/Talya2 (2).png", code: "PRK100", price: "8.51 €", glb: "/parket-6.glb", usdz: "/parket-6.usdz" ,link:"/talya/"},
  { name: "Querica Antica Dvoslojni Parket",image: "/GAIA_SPINA-ITALIANA_QUERCIA-ANTICA_i9noh3.jpg", code: "PRK100", price: " 52.56 € / m2", glb: "/parket-7.glb", usdz: "/parket-7.usdz",link:"/querica-antica-dvoslojni-parket/" },
  { name: "Dark Parquet",image: "/BGP_GAIA_vesuvio_CAPRI_ojlezq (1).jpg", code: "PRK100", price: "39 € / m2", glb: "/parket-8.glb", usdz: "/parket-8.usdz",link:"/capri-dvoslojni-parket/"},
  { name: "Lugano Laminat",image: "/Lugano2 (2).png", code: "PRK1106", price: "8.51 € / m2", glb: "/parket-9.glb", usdz: "/parket-9.usdz",link:"/lugano/" },
  { name: "Fiordo dvoslojni parket",image: "/GAIA_fiordo_doga_zvyfrh (1).jpg", code: "PRK100", price: "45.50 € / m2", glb: "/parket-10.glb", usdz: "/parket-10.usdz",link:"/fiordo-dvoslojni-parket/" },
  { name: "Merik Laminat", image: "/Meric2 (1).png", code: "PRK100", price: "8.51 €", glb: "/laminat-1.glb", usdz: "/laminat-1.usdz",link:"/merik/" },
];

const ARFlooringVisualizer = () => {
  const [selectedFlooring, setSelectedFlooring] = useState(flooringOptions[0]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const carousel = document.querySelector(".carousel-container");
      if (carousel) {
        const rect = carousel.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setShowText(true);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    
    <div className="container">
      <Header />
      {/* Dropdown Selection */}
      <div>
      <div className="container">
      <h1 className="h1-styling">Vizualizator talnih oblog</h1>
      <p className="p-styling">Talne obloge so velika naložba, ki je kupci ne jemljejo zlahka. Preproga, ploščice ali trden les – ne glede na izdelek, za katerega se naša stranka odloči, bistveno je, da dobi pravega.Z našo napredno tehnologijo vizualizacije kupcem pokažemo, kako bodo vaši izdelki izgledali v njihovih domovih, preden dejansko opravijo nakup.</p>
      <p className="p-styling">V meniju izberite tla, ki jih želite preizkusiti, kliknite na pogled v ar in usmerite telefon na tla</p>
      </div>
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
      </div>

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
    <p className="tag-description">Upoštevajte, da se izdelki v resničnem življenju lahko razlikujejo od 3D modela</p>
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
          <a href={`https://www.ars-domus.eu/${selectedFlooring.link}`}> <button className="button-5">Poglej več <i class="arrow right"></i></button></a>
        </div>
      </div>
      {/* Image Carousel */}
      
      <div className="carousel-container">
      <h1 className="h1-styling">Naši projekti</h1>
      <p className="p-styling">Nudimo tudi uslugo vgradnje talnih oblog, saj kakovostna tla potrebujejo kakovostno vgradnjo. Naša ekipa strokovnjakov bo poskrbela, da bo vaš laminat položen profesionalno in natančno, kar zagotavlja dolgotrajno zadovoljstvo z vašo novo talno oblogo</p>
        <div className="carousel-track">
          {images.concat(images).map((src, index) => (
            <img key={index} src={src} alt={`Floor ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default ARFlooringVisualizer;