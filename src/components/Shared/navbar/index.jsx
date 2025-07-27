import { useNavigate, Link } from "react-router-dom";
import './index.css';
import { CircleUser, TimerIcon, Menu } from 'lucide-react';
import Button from "../../Shared/Button";
import { useState } from 'react';

const Navbar = ({ activeLink }) => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nb-header">
      <div className="nb-header-content">
        <a className="nb-logo">
          <TimerIcon size={36} />
          TimeVault
        </a>
        
        <button className="nb-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nb-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a
            onClick={() => { 
              navigate("/Dashboard");
              setIsMobileMenuOpen(false);
            }}
            className={`nb-nav-link ${activeLink === 'Dashboard' ? 'active' : ''}`}
            href="#"
          >
            Dashboard
          </a>
          <a
            onClick={() => { 
              navigate("/CreateCapsule");
              setIsMobileMenuOpen(false);
            }}
            className={`nb-nav-link ${activeLink === 'Create' ? 'active' : ''}`}
            href="#"
          >
            Create
          </a>
          <a
            onClick={() => { 
              navigate("/PublicWall");
              setIsMobileMenuOpen(false);
            }}
            className={`nb-nav-link ${activeLink === 'Public wall' ? 'active' : ''}`}
            href="#"
          >
            Public wall
          </a>
          <a
            onClick={() => { 
              navigate("/Profile");
              setIsMobileMenuOpen(false);
            }}
            className={`nb-nav-link ${activeLink === 'Profile' ? 'active' : ''}`}
            href="#"
          >
            Profile
          </a>

          <Button
            text={"Logout"}
            onClickListener={() => {
              localStorage.clear();
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
            className="nb-capsule-btn nb-capsule-btn-primary"
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;