import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const PublicCapsule = ({ 
    emoji = "💭", 
    color = "#c300ffff", 
    mood = "nostalgic", 
    coverImage = '',
    title = "College Graduation Letter",
    preview = "A letter to my future self on graduation day. Opened it 5 years later - it's amazing how much has changed yet stayed the same.",
    location = "Lebanon, Beirut",
    openedDate = "Jan 15, 2024",
    state = "Unlisted",
}) => {

const navigate = useNavigate();

const getMoodLabel = (mood) => {
    const moods = {
        hopeful: "🌟 Hopeful",
        nostalgic: "🌅 Nostalgic", 
        excited: "🎉 Excited",
        reflective: "🤔 Reflective",
        grateful: "🙏 Grateful",
        adventurous: "🚀 Adventurous",
        peaceful: "🕊️ Peaceful",
        curious: "🔍 Curious"
    };
    return moods[mood] || mood;
};

return(

        <div class="uc-capsule-card" style={{ borderLeft: `4px solid ${color}` }}>
                    {coverImage && (
                        <div class="uc-capsule-cover" style={{ marginBottom: '1rem' }}>
                            <img src={coverImage} alt="Capsule cover" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                    )}
                    <div class="uc-capsule-header">
                        <div class="uc-capsule-emoji" style={{ marginLeft: 'auto', fontSize: '1.5rem' }}>{emoji}</div>
                    </div>
                    <h3 class="uc-capsule-title">{title}</h3>
                    <div class="uc-capsule-status">{state}!</div>
                    <p class="uc-capsule-preview">{preview}</p>
                    <div class="uc-capsule-meta">
                        <div class="uc-capsule-meta-item">📍 {location}</div>
                        <div class="uc-capsule-meta-item">📅 Opened at {openedDate}</div>
                        {mood && <div class="uc-capsule-meta-item">{getMoodLabel(mood)}</div>}
                    </div>
                    <div class="uc-capsule-actions">
                        <a href="#" class="uc-capsule-btn uc-capsule-btn-primary">Open capsule</a>
                        <a href="#" class="uc-capsule-btn uc-btn-secondary">Share</a>
                    </div>
         </div>
    );
 };

 export default PublicCapsule;