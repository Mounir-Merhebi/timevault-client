import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Edit3, Clock, MapPin, Gift, Atom, LockIcon, Mail, Earth, PaintRoller, TimerIcon, Heart, PencilIcon, Calendar, MapPinIcon, MailCheck, Lock, Phone, Smartphone, Image } from 'lucide-react';
import Navbar from "../../components/Shared/navbar"; 
import Footer from "../../components/Shared/footer";
import LockedCapsule from "../../components/DashboardCapsules/LockedCapsule";  
import OpenedCapsule from "../../components/DashboardCapsules/OpenedCapsules";
import UnlistedCapsule from "../../components/DashboardCapsules/UnlistedCapsule";

const Dashboard = () => {
  const navigate = useNavigate();

  return(
    <div>
    <Navbar activeLink="Dashboard" />
    <main class="db-main-content">
        <section class="db-welcome-section">
            <h1 class="db-welcome-title">Welcome back, Mounir!</h1>
            <p class="db-welcome-subtitle">You have 3 capsules waiting and 2 ready to be opened.</p>
            
            <div class="db-stats-grid">
                <div class="db-stat-card">
                    <div class="db-stat-label">Total Capsules</div>
                    <div class="db-stat-number">5</div>
                </div>
                <div class="db-stat-card">
                    <div class="db-stat-label">Waiting to Open</div>
                    <div class="db-stat-number">3</div>
                </div>
                <div class="db-stat-card">
                    <div class="db-stat-label">Ready to Open</div>
                    <div class="db-stat-number">2</div>
                </div>
                <div class="db-stat-card">
                    <div class="db-stat-label">Public Capsules</div>
                    <div class="db-stat-number">1</div>
                </div>
            </div>
        </section>

        <section class="db-capsules-section">

        
            <div class="db-capsules-header">
                <h2 class="db-capsules-title">Your Time Capsules</h2>
                <div class="db-capsule-filters">
                    <button class="db-filter-btn active">All</button>
                    <button class="db-filter-btn">Waiting</button>
                    <button class="db-filter-btn">Ready</button>
                    <button class="db-filter-btn">Opened</button>
                    <a href="#" class="db-new-capsule-btn">New Capsule</a>
                </div>
            </div>

            <div class="db-capsules-grid">
    
      <LockedCapsule />
      <OpenedCapsule />
      <UnlistedCapsule />

            </div>
        </section>
    </main>
       <Footer></Footer>
    </div>
  );

};
export default Dashboard;