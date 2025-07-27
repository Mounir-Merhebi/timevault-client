import "./index.css";
import {
  Image,
  Mic,
  NotebookText,
  Lock,
  Earth,
  Mail,
} from "lucide-react";
import Navbar from "../../components/Shared/navbar";
import { useCreateCapsuleLogic } from './logic';

const CreateCapsule = () => {
  const {
    title, setTitle,
    message, setMessage,
    selectedEmoji, setSelectedEmoji,
    selectedColor, setSelectedColor,
    selectedPrivacy, setSelectedPrivacy,
    selectedMood, setSelectedMood,
    surpriseMode, setSurpriseMode,
    revealDate, setRevealDate,
    revealTime, setRevealTime,
    coverImageBase64, setCoverImageBase64,
    attachedImageBase64, setAttachedImageBase64,
    handleFileToBase64,
    handleAudioChange,
    handleMarkdownChange,
    handleSubmit,
    navigate
  } = useCreateCapsuleLogic();

  return (
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
          <p
            className="cc-helper-text"
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            Fill out the details below to create your capsule
          </p>

          <div className="cc-input-group">
            <label htmlFor="capsule-title" className="cc-label">
              Capsule Title
            </label>
            <input
              type="text"
              id="capsule-title"
              className="cc-input"
              placeholder="Give your Capsule a memorable title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="cc-helper-text">
              This will help you identify your capsule later
            </p>
          </div>

          <div className="cc-input-group">
            <label htmlFor="your-message" className="cc-label">
              Your message
            </label>
            <textarea
              id="your-message"
              className="cc-textarea"
              placeholder="Write your message to the future..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <p className="cc-helper-text">
              What would you like to tell your future self or the world?
            </p>
          </div>

          <div className="cc-customization-grid">
            <div className="cc-form-group">
              <label className="cc-form-label">Choose an Emoji</label>
              <div className="cc-emoji-selector">
                {["💭", "🎁", "💌", "🌟", "🚀", "💎", "🌈", "🔮"].map((custom_emoji) => (
                  <div
                    key={custom_emoji}
                    className={`cc-emoji-option ${
                      selectedEmoji === custom_emoji ? "selected" : ""
                    }`}
                    onClick={() => setSelectedEmoji(custom_emoji)}
                    data-custom_emoji={custom_emoji}
                  >
                    {custom_emoji}
                  </div>
                ))}
              </div>
            </div>

            <div className="cc-form-group">
              <label className="cc-form-label">Choose a Color</label>
              <div className="cc-color-selector">
                {[
                  "#667eea",
                  "#764ba2",
                  "#f093fb",
                  "#4facfe",
                  "#43e97b",
                  "#fa709a",
                  "#ff9a9e",
                  "#fad0c4",
                ].map((color) => (
                  <div
                    key={color}
                    className={`cc-color-option ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                    data-color={color}
                    style={{ background: color }}
                  />
                ))}
              </div>
            </div>

            <label className="cc-file-label">
              <Image className="icon" />
              Upload Cover Image
              <input
                type="file"
                accept="image/*"
                className="cc-hidden-file-input"
                onChange={(e) => handleFileToBase64(e, setCoverImageBase64)}
              />
            </label>

            {coverImageBase64 && (
              <img
                src={coverImageBase64}
                alt="Cover Preview"
                className="cc-preview-img"
              />
            )}
          </div>

          <div className="cc-input-group">
            <label htmlFor="capsule-mood" className="cc-label">
              Capsule Mood
            </label>
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
            <p className="cc-helper-text">
              Select the mood that best represents your capsule's content
            </p>
          </div>

          <div className="cc-input-group">
            <label className="cc-label">
              Attach a file (Image, Audio, or Markdown note)
            </label>
            <div className="cc-file-attachment-group">
              <label className="cc-file-label">
                <Image className="icon" />
                Attach Image
                <input
                  type="file"
                  accept="image/*"
                  className="cc-hidden-file-input"
                  onChange={(e) => handleFileToBase64(e, setAttachedImageBase64)}
                />
              </label>

              <label className="cc-file-label">
                <Mic className="icon" />
                Attach Audio
                <input
                  type="file"
                  accept="audio/*"
                  className="cc-hidden-file-input"
                  onChange={handleAudioChange}
                />
              </label>

              <label className="cc-file-label">
                <NotebookText className="icon" />
                Markdown Note
                <input
                  type="file"
                  accept=".md,.txt"
                  className="cc-hidden-file-input"
                  onChange={handleMarkdownChange}
                />
              </label>
            </div>

            {attachedImageBase64 && (
              <img
                src={attachedImageBase64}
                alt="Attached Preview"
                className="cc-preview-img"
              />
            )}
          </div>

          <div className="cc-input-group">
            <label className="cc-label">
              When should this capsule be revealed?
            </label>
            <div className="cc-datetime-group">
              <input
                type="date"
                className="cc-datetime-input"
                value={revealDate}
                onChange={(e) => setRevealDate(e.target.value)}
              />
              <input
                type="time"
                className="cc-datetime-input"
                value={revealTime}
                onChange={(e) => setRevealTime(e.target.value)}
              />
            </div>
            <p className="cc-helper-text">
              Choose a date and time in the future when you want to see this
              message
            </p>
          </div>

          <div className="cc-input-group">
            <label className="cc-label">Privacy Settings</label>
            <div className="cc-privacy-options">
              <div
                className={`cc-privacy-card ${
                  selectedPrivacy === "private" ? "selected" : ""
                }`}
                onClick={() => setSelectedPrivacy("private")}
              >
                <Lock className="icon cc-privacy-icon" />
                <h4 className="cc-privacy-title">Private</h4>
                <p className="cc-privacy-description">
                  Only you will see this capsule when it's revealed
                </p>
              </div>
              <div
                className={`cc-privacy-card ${
                  selectedPrivacy === "public" ? "selected" : ""
                }`}
                onClick={() => setSelectedPrivacy("public")}
              >
                <Earth className="icon cc-privacy-icon" />
                <h4 className="cc-privacy-title">Public</h4>
                <p className="cc-privacy-description">
                  Anyone can see this capsule when it's revealed
                </p>
              </div>
              <div
                className={`cc-privacy-card ${
                  selectedPrivacy === "unlisted" ? "selected" : ""
                }`}
                onClick={() => setSelectedPrivacy("unlisted")}
              >
                <Mail className="icon cc-privacy-icon" />
                <h4 className="cc-privacy-title">Unlisted</h4>
                <p className="cc-privacy-description">
                  Only people with the link can see this capsule
                </p>
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
                <span className="cc-switch-text">
                  Hide content until reveal day
                </span>
              </div>
              <p className="cc-helper-text">
                When enabled, even you won't see the content until the capsule
                opens
              </p>
            </div>
          </div>

          <div className="cc-form-actions">
            <button
              onClick={() => {
                navigate("/Dashboard");
              }}
              type="button"
              className="cc-btn cc-btn-secondary"
            >
              Cancel
            </button>
            <button
              type="button"
              className="cc-btn cc-btn-primary"
              onClick={handleSubmit}
            >
              Create your capsule
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default CreateCapsule;
