import "./index.css";
import { useNavigate, Link } from "react-router-dom";

const PublicCapsule = ({ 
    emoji = "💭", 
    color = "#ff0000ff", 
    mood = "nostalgic", 
    coverImage = '',
    title = "College Graduation Letter",
    preview = "A letter to my future self on graduation day. Opened it 5 years later - it's amazing how much has changed yet stayed the same.",
    location = "Lebanon, Beirut",
    openedDate = "Jan 15, 2024",
    state = "opened",
    privacy = "public",
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

        <div class="oc-capsule-card" style={{ borderLeft: `4px solid ${color}` }}>
                    {coverImage && (
                        <div class="oc-capsule-cover" style={{ marginBottom: '1rem' }}>
                            <img src={coverImage} alt="Capsule cover" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                    )}
                    <div class="oc-capsule-header">
                        <div class="oc-capsule-emoji" style={{ marginLeft: 'auto', fontSize: '1.5rem' }}>{emoji}</div>
                    </div>
                    <h3 class="oc-capsule-title">{title}</h3>
                    <div class="oc-capsule-privacy">{privacy}</div>
                    <div class="oc-capsule-status">{state}!</div>
                    <p class="oc-capsule-preview">{preview}</p>
                    <div class="oc-capsule-meta">
                        <div class="oc-capsule-meta-item">📍 {location}</div>
                        <div class="oc-capsule-meta-item">📅 Opened at {openedDate}</div>
                        {mood && <div class="oc-capsule-meta-item">{getMoodLabel(mood)}</div>}
                    </div>
                    <div class="oc-capsule-actions">
                        <a href="#" class="oc-capsule-btn oc-capsule-btn-primary">Open capsule</a>
                        <a href="#" class="oc-capsule-btn oc-btn-secondary">Export</a>
                    </div>
         </div>
    );
 };

 export default PublicCapsule;