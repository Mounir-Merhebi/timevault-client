import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import { Edit3, Clock, MapPin, Gift, Atom, LockIcon, Mail, Earth, PaintRoller, TimerIcon, Heart, View } from 'lucide-react';

const Footer = () => {

const navigate = useNavigate();

return(
        <footer class="footer">
        <div class="footer-content">
            <h3 class="footer-title">Join the TimeVault Community</h3>
            <p class="footer-text">
                Create your own time capsules and share memories with the world. Every capsule tells a story worth preserving.
            </p>
            <div class="footer-links">
                <a href="#" class="footer-link">About</a>
                <a href="#" class="footer-link">Privacy</a>
                <a href="#" class="footer-link">Terms</a>
                <a href="#" class="footer-link">Contact</a>
            </div>
        </div>
    </footer>

);
};

export default Footer;


