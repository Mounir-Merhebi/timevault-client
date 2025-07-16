import { useNavigate, Link } from "react-router-dom";
import './index.css';

const Navbar = ({ activeLink }) => { 
  const navigate = useNavigate();

  return(
    <header className="nb-header"> 
      <div className="nb-header-content">
        <a  className="nb-logo">TimeVault</a> 
        <nav className="nb-nav-links"> 
          <a
            onClick={() => { navigate("/Dashboard") }}
            className={`nb-nav-link ${activeLink === 'Dashboard' ? 'active' : ''}`} 
          >
            Dashboard
          </a>
          <a
            onClick={() => { navigate("/CreateCapsule") }}
            className={`nb-nav-link ${activeLink === 'Create' ? 'active' : ''}`}
          >
            Create
          </a>
          <a
            onClick={() => { navigate("/PublicWall") }}
            className={`nb-nav-link ${activeLink === 'Public wall' ? 'active' : ''}`} 
          >
            Public wall
          </a>
          <a
            onClick={() => { navigate("/Profile") }}
            className={`nb-nav-link ${activeLink === 'Profile' ? 'active' : ''}`} 
          >
            Profile
          </a>
        </nav>
        <div className="nb-user-avatar">MM</div> 
      </div>
    </header>
  );
};

export default Navbar;
