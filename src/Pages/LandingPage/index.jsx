import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Gift, Atom, LockIcon, Mail, Earth, PaintRoller, TimerIcon, Heart, PencilIcon, Calendar, MapPinIcon, MailCheck, Lock, Phone, Smartphone, Image } from 'lucide-react';


const LandingPage = () => {
const navigate = useNavigate();

  return (

<div>
      <nav class="lp-nav">
        <div class="lp-container">
            <div class="lp-nav-content">
                <a href="#" class="lp-logo"><Clock/> TimeVault</a>
                <ul class="lp-nav-links">
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <a onClick={() => {navigate("/auth")}} class="lp-cta-btn">Get Started</a>
            </div>
        </div>
    </nav>
    
    <section class="lp-hero">
        <div class="lp-container">
            <h1>Send a Message to Your Future Self</h1>
            <p>Create a digital time capsule to unlock later. Write your thoughts, preserve memories, and choose when to reveal them to yourself or the world.</p>
            <div class="lp-hero-cta">
                <button onClick={() => {navigate("/auth")}} class="lp-cta-primary">Start Your Capsule</button>
                <a href="#how-it-works" class="lp-cta-secondary">Learn More</a>
            </div>
            
            <div class="lp-capsule-preview">
                <div class="lp-capsule-header">
                    <span class="lp-capsule-emoji"><Mail/></span>
                    <div class="lp-capsule-info">
                        <h3>My 2026 Goals</h3>
                        <div class="lp-capsule-date">Opens January 1, 2026</div>
                    </div>
                </div>
                <div class="lp-capsule-message">
                    "Dear future me, I hope you remember to follow your dreams and never give up on what makes you happy..."
                </div>
                <div class="lp-countdown">
                    <div class="lp-countdown-item">
                        <span class="lp-countdown-number">174</span>
                        <span class="lp-countdown-label">Days</span>
                    </div>
                    <div class="lp-countdown-item">
                        <span class="lp-countdown-number">12</span>
                        <span class="lp-countdown-label">Hours</span>
                    </div>
                    <div class="lp-countdown-item">
                        <span class="lp-countdown-number">45</span>
                        <span class="lp-countdown-label">Minutes</span>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section class="lp-how-it-works" id="how-it-works">
        <div class="lp-container">
            <div class="lp-section-header">
                <h2>How It Works</h2>
                <p>Creating your time capsule is simple and meaningful. Follow these easy steps to send a message to your future self.</p>
            </div>
            <div class="lp-steps">
                <div class="lp-step">
                    <span class="lp-step-icon"><PencilIcon class ="lp-icons-indigo"/></span>
                    <h3>Write Your Message</h3>
                    <p>Share your thoughts, dreams, or memories in a personal message to your future self.</p>
                </div>
                <div class="lp-step">
                    <span class="lp-step-icon"><Calendar class ="lp-icons-indigo"/></span>
                    <h3>Set a Reveal Date</h3>
                    <p>Choose when you want your message to be unlocked - days, months, or years from now.</p>
                </div>
                <div class="lp-step">
                    <span class="lp-step-icon"><MapPin class ="lp-icons-indigo"/></span>
                    <h3>Auto-Detect Location</h3>
                    <p>We'll automatically capture your current location and IP address as part of your capsule.</p>
                </div>
                <div class="lp-step">
                    <span class="lp-step-icon"><MailCheck class ="lp-icons-indigo"/></span>
                    <h3>Receive Your Message</h3>
                    <p>Get an email notification when it's time, and rediscover your past thoughts and feelings.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="lp-features" id="features">
        <div class="lp-container">
            <div class="lp-section-header">
                <h2>Why Choose TimeVault?</h2>
                <p>Our platform offers unique features designed to make your time capsule experience meaningful and secure.</p>
            </div>
            <div class="lp-features-grid">
                <div class="lp-feature">
                    <span class="lp-feature-icon"><Lock class ="lp-icons-indigo"/></span>
                    <h3>Privacy Control</h3>
                    <p>Choose whether your capsule is private (only you see it) or public (shared with the world when revealed).</p>
                </div>
                <div class="lp-feature">
                    <span class="lp-feature-icon"><Smartphone class ="lp-icons-indigo"/></span>
                    <h3>Cross-Platform</h3>
                    <p>Access your time capsules from any device, anywhere</p>
                </div>
                <div class="lp-feature">
                    <span class="lp-feature-icon"><Clock class ="lp-icons-indigo"/></span>
                    <h3>Countdown Timer</h3>
                    <p>Watch the countdown to your capsule's reveal date and build anticipation for your future message.</p>
                </div>
                <div class="lp-feature">
                    <span class="lp-feature-icon"><MailCheck class ="lp-icons-indigo"/></span>
                    <h3>Email Notifications</h3>
                    <p>Never miss a capsule opening - get notified via email when your message is ready to be revealed.</p>
                </div>
                <div class="lp-feature">
                    <span class="lp-feature-icon"><Earth class ="lp-icons-indigo"/></span>
                    <h3>Public Wall</h3>
                    <p>Discover inspiring messages from others around the world on our beautiful public capsule wall.</p>
                </div>
                <div class="lp-feature">
                    <span class="lp-feature-icon"><Image class ="lp-icons-indigo"/></span>
                    <h3>Multi-Media Support</h3>
                    <p>Include photos, videos, audio recordings, and text messages in your time capsules</p>
                </div>
            </div>
        </div>
    </section>

    <section class="lp-cta-section" id="signup">
        <div class="lp-container">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of people who are already sending messages to their future selves.</p>
            <button onClick={() => {navigate("/auth")}} class="lp-cta-primary">Create Your First Capsule</button>
        </div>
    </section>

    <footer class="lp-footer">
        <div class="lp-container">
            <div class="lp-footer-content">
                <div class="lp-footer-section">
                    <h3>TimeVault</h3>
                    <a href="#">About Us</a>
                    <a href="#">How It Works</a>
                    <a href="#">Features</a>
                </div>
                <div class="lp-footer-section">
                    <h3>Support</h3>
                    <a href="#">Help Center</a>
                    <a href="#">Contact Us</a>
                    <a href="#">FAQ</a>
                </div>
                <div class="lp-footer-section">
                    <h3>Legal</h3>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookie Policy</a>
                </div>
            </div>
            <div class="lp-footer-bottom">
                <p>&copy; 2025 TimeVault. All rights reserved. | Made with <Heart class ="lp-icons-mint"/> for your future self.</p>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default LandingPage;