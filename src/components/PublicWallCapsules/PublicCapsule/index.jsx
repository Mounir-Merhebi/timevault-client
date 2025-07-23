import "./index.css";
import Button from "../../Shared/Button";
import { usePublicCapsuleLogic } from './logic'; 

const PublicCapsule = ({
  emoji = "💭",
  color = "#4338CA",
  mood = "nostalgic",
  coverImage = "https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=220",
  title = "College Graduation Letter",
  preview = "A letter to my future self on graduation day...",
  author = "Anonymous",
  location = "Lebanon, Beirut",
  revealDate = "Jan 15, 2024",
  id
}) => {
  const { getMoodLabel, handleViewClick } = usePublicCapsuleLogic(id);

  return (
    <div className="pc-capsule-card" style={{ borderLeft: `4px solid ${color}` }}>
      {coverImage && (
        <div className="pc-capsule-cover">
          <img src={coverImage} alt="Capsule cover" />
        </div>
      )}
      <div className="pc-capsule-header">
        <div className="pc-capsule-author">{author}</div>
        <div className="pc-capsule-emoji">{emoji}</div>
      </div>
      <h3 className="pc-capsule-title">{title}</h3>
      <p className="pc-capsule-preview">{preview}</p>
      <div className="pc-capsule-meta">
        <div className="pc-capsule-meta-item">📍 {location}</div>
        <div className="pc-capsule-meta-item">📅 Revealed at {revealDate}</div>
        {mood && <div className="pc-capsule-meta-item">Mood: {getMoodLabel(mood)}</div>}
      </div>
      <div className="pc-capsule-actions">
        <Button
          text="View Capsule"
          className="pc-btn-primary pc-btn"
          onClickListener={handleViewClick}
        />
      </div>
    </div>
  );
};

export default PublicCapsule;
