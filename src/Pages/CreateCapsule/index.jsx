import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import {
  Image,
  Mic,
  NotebookText,
  Lock,
  Earth,
  Mail,
  MapPin
} from 'lucide-react';

import Navbar from "../../components/Shared/navbar"; 

const CreateCapsule = () => {
  const navigate = useNavigate();
  
  // Add these state variables
  const [selectedEmoji, setSelectedEmoji] = React.useState('💭');
  const [selectedColor, setSelectedColor] = React.useState('#667eea');
  const [selectedPrivacy, setSelectedPrivacy] = React.useState('private');
  const [selectedMood, setSelectedMood] = React.useState('');
  const [surpriseMode, setSurpriseMode] = React.useState(false);

 React.useEffect(() => {
    // Only set default date and time
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const dateInput = document.querySelector('input[type="date"]');
    const timeInput = document.querySelector('input[type="time"]');
    if (dateInput) {
        dateInput.value = `${year}-${month}-${day}`;
    }
    if (timeInput) {
        timeInput.value = `${hours}:${minutes}`;
    }
}, []);

  return(
    <>
    <Navbar activeLink="CreateCapsule" />

      <main className="cc-main-content">
        <section className="cc-create-section">
          <h1 className="cc-create-title">Create Your Time Capsule</h1>
          <p className="cc-create-subtitle">
            Write a message to your future self or share it with the world.
            Choose when you want it to be revealed.
          </p>
        </section>

        <section className="cc-form-section">
          <h2 className="cc-form-title">New Time Capsule</h2>
          <p className="cc-helper-text" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            Fill out the details below to create your capsule
          </p>

          <div className="cc-input-group">
            <label htmlFor="capsule-title" className="cc-label">Capsule Title</label>
            <input type="text" id="capsule-title" className="cc-input" placeholder="Give your Capsule a memorable title..." />
            <p className="cc-helper-text">This will help you identify your capsule later</p>
          </div>

          <div className="cc-input-group">
            <label htmlFor="your-message" className="cc-label">Your message</label>
            <textarea id="your-message" className="cc-textarea" placeholder="Write your message to the future..."></textarea>
            <p className="cc-helper-text">What would you like to tell your future self or the world?</p>
          </div>

<div className="cc-customization-grid">
    <div className="cc-form-group">
        <label className="cc-form-label">Choose an Emoji</label>
<div className="cc-emoji-selector">
    {['💭', '🎁', '💌', '🌟', '🚀', '💎', '🌈', '🔮'].map((emoji) => (
        <div 
            key={emoji}
            className={`cc-emoji-option ${selectedEmoji === emoji ? 'selected' : ''}`}
            onClick={() => setSelectedEmoji(emoji)}
            data-emoji={emoji}
        >
            {emoji}
        </div>
    ))}
</div>
    </div>
    <div className="cc-form-group">
        <label className="cc-form-label">Choose a Color</label>
<div className="cc-color-selector">
    {['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#ff9a9e', '#fad0c4'].map((color) => (
        <div 
            key={color}
            className={`cc-color-option ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => setSelectedColor(color)}
            data-color={color}
            style={{ background: color }}
        ></div>
    ))}
</div>
    </div>
    <div className="cc-form-group">
        <label className="cc-form-label">Cover Image</label>
        <button className="cc-attachment-btn">
            <Image className="icon" />
            Upload Cover Image
        </button>
        <p className="cc-helper-text">Optional cover image for your capsule</p>
    </div>
</div>

<div className="cc-input-group">
    <label htmlFor="capsule-mood" className="cc-label">Capsule Mood</label>
  <select 
    id="capsule-mood" 
    className="cc-select"
    value={selectedMood}
    onChange={(e) => setSelectedMood(e.target.value)}
>
    <option value="">Select a mood...</option>
    <option value="hopeful">🌟 Hopeful</option>
    <option value="nostalgic">🌅 Nostalgic</option>
    <option value="excited">🎉 Excited</option>
    <option value="reflective">🤔 Reflective</option>
    <option value="grateful">🙏 Grateful</option>
    <option value="adventurous">🚀 Adventurous</option>
    <option value="peaceful">🕊️ Peaceful</option>
    <option value="curious">🔍 Curious</option>
</select>

    <p className="cc-helper-text">Select the mood that best represents your capsule's content</p>
</div>

          <div className="cc-input-group">
            <label className="cc-label">Attach a file (Image, Audio, or Markdown note)</label>
            <div className="cc-attachment-options">
              <button className="cc-attachment-btn">
                <Image className="icon" />
                Attach Image
              </button>
              <button className="cc-attachment-btn">
                <Mic className="icon" />
                Attach Audio
              </button>
              <button className="cc-attachment-btn">
                <NotebookText className="icon" />
                Markdown Note
              </button>
            </div>
          </div>

          <div className="cc-input-group">
            <label className="cc-label">When should this capsule be revealed?</label>
            <div className="cc-datetime-group">
              <input type="date" defaultValue="2025-07-12" className="cc-datetime-input" />
              <input type="time" defaultValue="08:30" className="cc-datetime-input" />
            </div>
            <p className="cc-helper-text">Choose a date and time in the future when you want to see this message</p>
          </div>

          <div className="cc-input-group">
            <label className="cc-label">Privacy Settings</label>

<div className="cc-privacy-options">
    <div 
        className={`cc-privacy-card ${selectedPrivacy === 'private' ? 'selected' : ''}`}
        onClick={() => setSelectedPrivacy('private')}
    >
        <Lock className="icon cc-privacy-icon" />
        <h4 className="cc-privacy-title">Private</h4>
        <p className="cc-privacy-description">Only you will see this capsule when it's revealed</p>
    </div>
    <div 
        className={`cc-privacy-card ${selectedPrivacy === 'public' ? 'selected' : ''}`}
        onClick={() => setSelectedPrivacy('public')}
    >
        <Earth className="icon cc-privacy-icon" />
        <h4 className="cc-privacy-title">Public</h4>
        <p className="cc-privacy-description">Anyone can see this capsule when it's revealed</p>
    </div>
    <div 
        className={`cc-privacy-card ${selectedPrivacy === 'unlisted' ? 'selected' : ''}`}
        onClick={() => setSelectedPrivacy('unlisted')}
    >
        <Mail className="icon cc-privacy-icon" />
        <h4 className="cc-privacy-title">Unlisted</h4>
        <p className="cc-privacy-description">Only people with the link can see this capsule</p>
    </div>
</div>
          </div>

          <div className="cc-input-group">
          <label className="cc-label">Surprise Mode</label>

      <div className="cc-surprise-mode">
    <div className="cc-switch-container">
        <input 
            type="checkbox" 
            id="surprise-mode" 
            className="cc-switch-input"
            checked={surpriseMode}
            onChange={(e) => setSurpriseMode(e.target.checked)}
        />
        <label htmlFor="surprise-mode" className="cc-switch-label">
            <span className="cc-switch-slider"></span>
        </label>
        <span className="cc-switch-text">Hide content until reveal day</span>
    </div>
    <p className="cc-helper-text">When enabled, even you won't see the content until the capsule opens</p>
</div>

    </div>

          <div className="cc-input-group">
            <label htmlFor="location" className="cc-label">Location</label>
            <div className="cc-location-input">
              <MapPin className="icon" />
              <input type="text" id="location" className="cc-input" defaultValue="Lebanon, Beirut" readOnly />
            </div>
          </div>

          <div className="cc-form-actions">
            <button className="cc-btn cc-btn-secondary">Cancel</button>
            <button className="cc-btn cc-btn-primary">Create your capsule</button>
          </div>
        </section>

      </main>
    </>
  );
};

export default CreateCapsule;
