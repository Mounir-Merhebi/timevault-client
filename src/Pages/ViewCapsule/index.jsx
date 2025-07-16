import React from "react";
import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import { 
    Edit3, 
    Clock, 
    MapPin, 
    Gift, 
    Atom, 
    LockIcon, 
    Mail, 
    Earth, 
    PaintRoller, 
    TimerIcon, 
    Heart, 
    View,
    User,
    Calendar,
    Shield,
    Sparkles,
    Share2,
    Home
} from 'lucide-react';
import Navbar from "../../components/Shared/navbar"; 

const ViewCapsule = () => {
    const navigate = useNavigate();

    const capsuleData = {
        emoji: '🎁',
        color: '#667eea',
        mood: 'hopeful',
        coverImage: 'https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=220',
        surpriseMode: true,
        revealDate: 'July 12, 2025',
        createdDate: 'July 12, 2024'
    };

    const getMoodDisplay = (mood) => {
        const moods = {
            'hopeful': '🌟 Hopeful',
            'nostalgic': '🌅 Nostalgic',
            'excited': '🎉 Excited',
            'reflective': '🤔 Reflective',
            'grateful': '🙏 Grateful',
            'adventurous': '🚀 Adventurous',
            'peaceful': '🕊️ Peaceful',
            'curious': '🔍 Curious'
        };
        return moods[mood] || mood;
    };

    return (
        <div>
            <Navbar activeLink="ViewCapsule" />
            
            <main className="vc-main-content">
                <section className="vc-section">
                    <h1 className="vc-title">My 2026 Goals Capsule</h1>
                    
                    <div className="vc-visual-identity">
                        <div className="vc-capsule-emoji">{capsuleData.emoji}</div>
                        <div 
                            className="vc-capsule-color"
                            style={{ backgroundColor: capsuleData.color }}
                        ></div>
                    </div>

            
                    {capsuleData.coverImage && (
                        <img 
                            src={capsuleData.coverImage} 
                            alt="Capsule Cover" 
                            className="vc-cover-image"
                        />
                    )}

       
                    {capsuleData.surpriseMode && (
                        <div className="vc-surprise-indicator">
                            <div className="vc-surprise-text">
                                <Sparkles className="icon" />
                                This was a surprise capsule - content was hidden until reveal!
                            </div>
                        </div>
                    )}

          
                    {capsuleData.mood && (
                        <div className="vc-mood-display">
                            <div className="vc-mood-text">
                                Mood: {getMoodDisplay(capsuleData.mood)}
                            </div>
                        </div>
                    )}
                    
      
                    <div className="vc-meta-info">
                        <div className="vc-meta-item">
                            <User className="icon" />
                            <div>
                                <span className="vc-meta-label">Created by:</span> Mounir
                            </div>
                        </div>
                        <div className="vc-meta-item">
                            <Calendar className="icon" />
                            <div>
                                <span className="vc-meta-label">Created:</span> {capsuleData.createdDate}
                            </div>
                        </div>
                        <div className="vc-meta-item">
                            <Clock className="icon" />
                            <div>
                                <span className="vc-meta-label">Opened:</span> {capsuleData.revealDate}
                            </div>
                        </div>
                        <div className="vc-meta-item">
                            <MapPin className="icon" />
                            <div>
                                <span className="vc-meta-label">Location:</span> Lebanon, Sidon
                            </div>
                        </div>
                        <div className="vc-meta-item">
                            <Shield className="icon" />
                            <div>
                                <span className="vc-meta-label">Privacy:</span> Private
                            </div>
                        </div>
                    </div>


                    <div className="vc-message-content">
                        <p>Dear future me,</p>
                        <p>I hope you remember to follow your dreams and never give up on what makes you happy. As I write this in 2025, my biggest goals for 2026 are to:</p>
                        <ul>
                            <li>Launch my personal project.</li>
                            <li>Travel to at least two new countries.</li>
                            <li>Read 20 books.</li>
                            <li>Spend more quality time with family and friends.</li>
                        </ul>
                        <p>Remember the feeling of excitement and determination you have right now. Don't let setbacks define you, but rather use them as stepping stones. Stay curious, stay kind, and keep learning.</p>
                        <p>I'm sending you all my hopes and best wishes from the past. I can't wait to see what you've accomplished!</p>
                        <p>Warmly,</p>
                        <p>Your past self (Mounir, July 12, 2025)</p>
                    </div>
                    
                    <div className="vc-attachment-section">
                        <h3 className="vc-attachment-title">📎 Attached Content</h3>
                        
                        <div className="vc-attachment-container">
                            <img 
                                src="https://placehold.co/400x250/E0E0E0/333333?text=Attached+Image" 
                                alt="Attached Image"
                            />
                            <p className="vc-attachment-label">A photo from my favorite hiking trail.</p>
                        </div>

                        <div className="vc-attachment-container">
                            <audio controls>
                                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
                                Your browser does not support the audio element.
                            </audio>
                            <p className="vc-attachment-label">A voice note describing my feelings.</p>
                        </div>

                        <div className="vc-attachment-container">
                            <pre>
# My Future Self Manifesto

## Principles to Live By:
- **Integrity**: Always act with honesty.
- **Growth**: Never stop learning.
- **Empathy**: Understand others' perspectives.

## Key Learnings from 2025:
1. Patience is key.
2. Small steps lead to big changes.
3. Cherish moments, not just goals.

---
*This note was written with hope for the future.*
                            </pre>
                            <p className="vc-attachment-label">A markdown note on personal reflections.</p>
                        </div>
                    </div>

                    <div className="vc-actions">
                        <Link to="/dashboard" className="vc-btn vc-btn-secondary">
                            <Home className="icon" />
                            Go to Dashboard
                        </Link>
                        <button className="vc-btn vc-btn-primary">
                            <Share2 className="icon" />
                            Share This Capsule
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ViewCapsule;