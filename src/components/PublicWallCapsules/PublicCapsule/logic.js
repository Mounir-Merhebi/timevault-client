import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const usePublicCapsuleLogic = (id) => {
  const navigate = useNavigate();

  const getMoodLabel = useCallback((mood) => {
    const moods = {
      hopeful: "🌟 Hopeful",
      nostalgic: "🌅 Nostalgic",
      excited: "🎉 Excited",
      reflective: "🤔 Reflective",
      grateful: "🙏 Grateful",
      adventurous: "🚀 Adventurous",
      peaceful: "🕊️ Peaceful",
      curious: "🔍 Curious",
    };
    return moods[mood] || mood;
  }, []);

  const handleViewClick = useCallback(() => {
    navigate(`/ViewCapsule/${id}`);
  }, [id, navigate]);

  return {
    getMoodLabel,
    handleViewClick,
  };
};
