import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Edit3, Clock, MapPin, Gift, Atom, LockIcon, Mail, Earth, PaintRoller, TimerIcon, Heart, PencilIcon, Calendar, MapPinIcon, MailCheck, Lock, Phone, Smartphone, Image } from 'lucide-react';
import Navbar from "../../components/Shared/navbar"; 
import Footer from "../../components/Shared/footer";

const Profile = () => {
  const navigate = useNavigate();

  return (

    <div>

    <Navbar activeLink="Profile" />

    <main class="pf-main-content">
        <aside class="pf-profile-sidebar">
            <div class="pf-profile-header">
                <div class="pf-profile-avatar">
                    MM
                </div>
                <div class="pf-profile-name">Mounir merhebi</div>
                <div class="pf-profile-email">mounirmerhebi21@gmail.com</div>
            </div>
            
            <div class="pf-profile-info">
                <div class="pf-info-item">
                    <div class="pf-info-icon">📅</div>
                    <div class="pf-info-content">
                        <div class="pf-info-label">Member Since</div>
                        <div class="pf-info-value">June 2024</div>
                    </div>
                </div>
                <div class="pf-info-item">
                    <div class="pf-info-icon">📍</div>
                    <div class="pf-info-content">
                        <div class="pf-info-label">Location</div>
                        <div class="pf-info-value">New York, NY</div>
                    </div>
                </div>
                <div class="pf-info-item">
                    <div class="pf-info-icon">⏰</div>
                    <div class="pf-info-content">
                        <div class="pf-info-label">Timezone</div>
                        <div class="pf-info-value">EST (UTC-5)</div>
                    </div>
                </div>
            </div>
        </aside>

   <div class="pf-profile-content">
            <div class="pf-content-card">
                <div class="pf-card-header">
                    <h2 class="pf-card-title">Personal Information</h2>
                </div>
                <div class="pf-card-content">
                    <div class="pf-form-row">
                        <div class="pf-form-group">
                            <label class="pf-form-label">Username</label>
                            <input type="text" class="pf-form-input" value="Mounir merhebi"/>
                        </div>
                        <div class="pf-form-group">
                            <label class="pf-form-label">password</label>
                            <input type="password" class="pf-form-input" placeholder="Change your password"/>
                        </div>
                    </div>
                    <div class="pf-form-group">
                        <label class="pf-form-label">Email</label>
                        <input type="email" class="pf-form-input" value="mounirmerhebi21@gmail.com"/>
                    </div>
                    <div class="pf-form-actions">
                        <button class="pf-btn pf-btn-cancel">Cancel</button>
                        <button class="pf-btn pf-btn-save">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
    </div>
    );
    };

export default Profile;