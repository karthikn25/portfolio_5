import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Topbar.css";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle the mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  // Toggle the menu visibility
  };

  return (
    <div className="topbar">
    <div className="topbar-display">
    <div className="topbar-content">
        <div className="topbar-logo">
          <span className="color">K</span>
          <span>arthi</span>
          <span className="color">K</span>
          <span>eya</span>
          <span className="color">N</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="bx bx-x"></i>  // 'X' icon to close menu
          ) : (
            <i className="bx bx-menu"></i>  // Hamburger icon to open menu
          )}
        </div>
      </div>
      <div className={`nav ${menuOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={() => navigate("/")}>HOME</li>
        <li onClick={() => navigate("/about")}>ABOUT</li>
        <li onClick={() => navigate("/service")}>SERVICE</li>
        <li onClick={() => navigate("/project")}>PROJECTS</li>
        <li onClick={() => navigate("/contact")}>CONTACT</li>
      </ul>
    </div>
    </div>
      

      {/* Navigation List - Adds 'active' class on mobile when menu is open */}
      
    </div>
  );
}
