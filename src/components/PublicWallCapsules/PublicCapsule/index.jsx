import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../Shared/Button";

const PublicCapsule = ({ 
    emoji = "💭", 
    color = "#ff0000ff", 
    mood = "nostalgic", 
    coverImage = 'https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=220',
    title = "College Graduation Letter",
    preview = "A letter to my future self on graduation day. Opened it 5 years later - it's amazing how much has changed yet stayed the same.",
    author = "Sarah Martinez",
    initials = "SM",
    location = "Lebanon, Beirut",
    openedDate = "Jan 15, 2024"
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

        <div class="pc-capsule-card" style={{ borderLeft: `4px solid ${color}` }}>
                    {coverImage && (
                        <div class="pc-capsule-cover" style={{ marginBottom: '1rem' }}>
                            <img src={coverImage} alt="Capsule cover" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />
                        </div>
                    )}
                    <div class="pc-capsule-header">
                        <div class="pc-capsule-avatar" style={{ background: color }}>{initials}</div>
                        <div class="pc-capsule-author">{author}</div>
                        <div class="pc-capsule-emoji" style={{ marginLeft: 'auto', fontSize: '1.5rem' }}>{emoji}</div>
                    </div>
                    <h3 class="pc-capsule-title">{title}</h3>
                    <p class="pc-capsule-preview">{preview}</p>
                    <div class="pc-capsule-meta">
                        <div class="pc-capsule-meta-item">📍 {location}</div>
                        <div class="pc-capsule-meta-item">📅 Opened at {openedDate}</div>
                        {mood && <div class="pc-capsule-meta-item">{getMoodLabel(mood)}</div>}
                    </div>
                    <div class="pc-capsule-actions">
                        <Button 
                            text="View Capsule" 
                            className={"pc-btn-primary pc-btn"}/>
                        <Button 
                            text="Share" 
                            className={"pc-btn-secondary pc-btn"}/>
                    </div>
         </div>
    );
 };

 export default PublicCapsule;