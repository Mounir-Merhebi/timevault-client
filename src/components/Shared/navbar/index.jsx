import { useNavigate, Link } from "react-router-dom";
import './index.css';
import { CircleUser, TimerIcon  } from 'lucide-react';

const Navbar = ({ activeLink }) => { 
  const navigate = useNavigate();

  return(
    <header className="nb-header"> 
      <div className="nb-header-content">
        <a  className="nb-logo"> <TimerIcon size = {36}/>TimeVault</a> 
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
        <div className="nb-user-avatar" onClick={() => { navigate("/Profile") }}><CircleUser/></div> 
      </div>
    </header>
  );
};

export default Navbar;
