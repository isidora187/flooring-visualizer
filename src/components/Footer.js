import React, { useEffect } from "react";
import "./Footer.css"; // Import footer styles

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector(".footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          footer.classList.add("fade-in");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h3>ARS DOMUS</h3>
          <p>ARS DOMUS D.O.O</p>
          <p>Dalibor Marčeta s.p</p>
          <p>Partizanska ulica 3D, 6000 Koper</p>
          <p>ShowRoom: Gadari 134, Kaštel – Buje</p>
        </div>

        {/* Working Hours */}
        <div className="footer-section">
          <h3>Delovni čas</h3>
          <p>Ponedeljek - Petek: 8:00 - 17:00</p>
          <p>Sobota: 8:00 - 13:00</p>
          <p>Nedelja/prazniki: zaprto</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Kontaktni podatki</h3>
          <p>Telefon: <a href="tel:+38651229362">+386 51 229 362</a></p>
          <p>Website: <a href="https://www.ars-domus.eu" target="_blank" rel="noopener noreferrer">www.ars-domus.eu</a></p>
          <p>Email: <a href="mailto:arsdomus85@gmail.com">arsdomus85@gmail.com</a></p>
        </div>

        {/* Consultation & Info */}
        <div className="footer-section">
          <h3>Svetovanje in ogled</h3>
          <ul>
            <li><a href="#">Pošljite povpraševanje</a></li>
            <li><a href="#">Brezplačno svetovanje</a></li>
            <li><a href="#">Ogled na domu</a></li>
          </ul>
        </div>

        {/* General Info */}
        <div className="footer-section">
          <h3>Splošne informacije</h3>
          <ul>
            <li><a href="#">Splošni pogoji</a></li>
            <li><a href="#">Zasebnost in varnost</a></li>
            <li><a href="#">Spletni piškotki</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
