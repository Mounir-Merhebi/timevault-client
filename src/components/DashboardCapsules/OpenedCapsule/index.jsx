import "./index.css";
import { useOpenedCapsuleLogic } from './logic';

const OpenedCapsule = ({
  id,
  emoji = "💭",
  color = "#ff0000ff",
  mood = "nostalgic",
  coverImage = "",
  title = "College Graduation Letter",
  location = "Lebanon, Beirut",
  openedDate = "Jan 15, 2024",
  state = "Revealed",
  privacy = "public",
  surpriseMode = false,
  unlistedToken = "",
  message = "Your secret message content."
}) => {
  const { handleShare, getMoodLabel, handleOpen, feedbackMessage } = useOpenedCapsuleLogic(id, unlistedToken); 

  return (
    <div className="oc-capsule-card" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="oc-capsule-header">
        <div className="oc-capsule-privacy">{privacy}</div>
        <div className="oc-capsule-status">{state}!</div>
        <div className="oc-capsule-emoji" style={{ fontSize: '1.5rem' }}>{emoji}</div>
      </div>

      {surpriseMode ? (
        <div className="oc-surprise-mode">
          <div className="oc-capsule-cover">
            <img
              src={`http://127.0.0.1:8000/api/v0.1/user/app/private/images/687ec8e75c1c4.jpeg`}
              alt="Capsule cover"
              className="oc-capsule-imgs-surprise"
            />
          </div>
          <h3 className="oc-capsule-title">🎉 You've Received a Surprise Capsule! 🎉</h3>
          <p className="oc-capsule-preview">
            The creator has a surprise for you. Click to open it and reveal the hidden content.
          </p>
          <div className="oc-capsule-actions">
            <button onClick={handleOpen} className="oc-capsule-btn oc-capsule-btn-primary">Reveal Surprise</button>
          </div>
        </div>
      ) : (
        <>
          {coverImage && (
            <div className="oc-capsule-cover">
              <img
                src={coverImage}
                alt="Capsule cover"
                className="oc-capsule-img"
              />
            </div>
          )}

          <h3 className="oc-capsule-title">{title}</h3>
          <p className="oc-capsule-preview">{message}</p>

          <div className="oc-capsule-meta">
            <div className="oc-capsule-meta-item">📍 {location}</div>
            <div className="oc-capsule-meta-item">📅 Opened at {openedDate}</div>
            {mood && <div className="oc-capsule-meta-item">{getMoodLabel(mood)}</div>}
            {feedbackMessage && <p className="oc-feedback-message">{feedbackMessage}</p>}
          </div>

          <div className="oc-capsule-actions">
            <button onClick={handleOpen} className="oc-capsule-btn oc-capsule-btn-primary">Open Capsule</button>

            {privacy === "unlisted" && (
              <button onClick={handleShare} className="oc-capsule-btn oc-btn-share">Copy Unlisted Link</button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default OpenedCapsule;