import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css"; // Make sure to create this CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Contact Us */}
      <a href="/contact" className="header-link desktop">Contact Us</a>

      {/* Center: Logo */}
      <img src="/logo-ars-domus110.png" alt="Ars Domus Logo" className="logo" />

      {/* Right: Products */}
      <a href="/products" className="header-link desktop">Products</a>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="mobile-menu">
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          <a href="/products" onClick={() => setMenuOpen(false)}>Products</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
