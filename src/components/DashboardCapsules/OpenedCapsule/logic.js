import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useOpenedCapsuleLogic = (id, unlistedToken) => {
  const navigate = useNavigate();
  const [feedbackMessage, setFeedbackMessage] = useState(""); 

  const handleShare = useCallback(() => {

    const shareLink = `http://localhost:3000/ViewShared/${unlistedToken}`;
    navigator.clipboard.writeText(shareLink)
      .then(() => {
        setFeedbackMessage("Link copied to clipboard!"); 
      })
      .catch(() => {
        setFeedbackMessage("Failed to copy link."); 
      });
  }, [unlistedToken]);

  const getMoodLabel = useCallback((mood) => {
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
    return moods[mood];
  }, []);

  const handleOpen = useCallback(() => {
    if (id) {
      navigate(`/ViewCapsule/${id}`);
    } else {
      setFeedbackMessage("Capsule ID not available."); 
    }
  }, [id, navigate]);

  return {
    handleShare,
    getMoodLabel,
    handleOpen,
    feedbackMessage, 
  };
};