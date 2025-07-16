import React from "react";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import { Edit3, Clock, MapPin, Gift, Atom, LockIcon, Mail, Earth, PaintRoller, TimerIcon, Heart } from 'lucide-react';
import Navbar from "../../components/Shared/navbar"; 
import Footer from "../../components/Shared/footer";
import PublicCapsule from "../../components/PublicWallCapsules/PublicCapsule";
import Button from "../../components/Shared/Button";

const PublicWall = () => {
    

const navigate = useNavigate();

return(
    <div>
    <Navbar activeLink="PublicWall" />
    <main class="pw-main-content">
        <section class="pw-hero-section">
            <h1 class="pw-hero-title">Public Wall</h1>
            <p class="pw-hero-subtitle">Discover amazing time capsules from the TimeVault community</p>
            
            <div class="pw-stats-grid">
                <div class="pw-stat-item">
                    <div class="pw-stat-number">1,247</div>
                    <div class="pw-stat-label">Public Capsules</div>
                </div>
                <div class="pw-stat-item">
                    <div class="pw-stat-number">892</div>
                    <div class="pw-stat-label">Contributors</div>
                </div>
                <div class="pw-stat-item">
                    <div class="pw-stat-number">324</div>
                    <div class="pw-stat-label">Opened Today</div>
                </div>
            </div>
        </section>

        <section class="pw-explore-section">
            <div class="pw-explore-header">
                <h2 class="pw-explore-title">Explore Time Capsules</h2>
                <div class="pw-explore-controls">
                    <div class="pw-sort-control">
                        <span class="pw-sort-label">Sort:</span>
                        <select class="pw-sort-select">
                            <option>Recent</option>
                            <option>Oldest</option>
                        </select>
                    </div>
                    <input type="text" class="pw-search-input" placeholder="Search capsules..."/>
                </div>
            </div>

            <div class="pw-capsules-grid">
                <PublicCapsule />
                <PublicCapsule />
                <PublicCapsule />
                <PublicCapsule />
                <PublicCapsule />
                <PublicCapsule />
            </div>
        </section>

        <section class="pw-load-more-section">
            <Button 
                text="Load More Capsules"
                className={"pw-load-more-btn"}
                />
            <button class="pw-load-more-btn">Load More Capsules</button>
        </section>
    </main>
    <Footer></Footer>
    </div>
);
};

export default PublicWall;