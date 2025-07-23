import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useCreateCapsuleLogic = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("💭");
  const [selectedColor, setSelectedColor] = useState("#667eea");
  const [selectedPrivacy, setSelectedPrivacy] = useState("private");
  const [selectedMood, setSelectedMood] = useState("");
  const [surpriseMode, setSurpriseMode] = useState(false);
  const [revealDate, setRevealDate] = useState("");
  const [revealTime, setRevealTime] = useState("");
  const [coverImageBase64, setCoverImageBase64] = useState("");
  const [attachedImageBase64, setAttachedImageBase64] = useState("");
  const [audioBase64, setAudioBase64] = useState("");
  const [markdownFile, setMarkdownFile] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    setRevealDate(`${year}-${month}-${day}`);
    setRevealTime(`${hours}:${minutes}`);
  }, []);

  const handleFileToBase64 = useCallback((e, setBase64Fn) => {
    const file = e.target.files?.[0];
    if (!file) {
      setBase64Fn("");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => setBase64Fn(reader.result);
    reader.readAsDataURL(file);
  }, []);

  const handleAudioChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setAudioBase64("");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setAudioBase64(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleMarkdownChange = useCallback((e) => {
    const file = e.target.files?.[0] || null;
    setMarkdownFile(file);
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const reveal_at = revealDate && revealTime
      ? `${revealDate} ${revealTime}:00`
      : null;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("message", message);
    formData.append("custom_emoji", selectedEmoji);
    formData.append("custom_color", selectedColor);
    formData.append("privacy_setting", selectedPrivacy);
    formData.append("mood", selectedMood);
    formData.append("surprise_mode", surpriseMode ? 1 : 0);

    if (reveal_at) formData.append("reveal_date", reveal_at);
    if (coverImageBase64) formData.append("cover_image_url", coverImageBase64);
    if (attachedImageBase64) formData.append("media_image_url", attachedImageBase64);
    if (audioBase64) formData.append("audio_file_url", audioBase64);
    if (markdownFile) formData.append("text_note", markdownFile);

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v0.1/user/CreateCapsule",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Capsule created:", data);
      alert("Capsule created successfully!");
      navigate("/Dashboard");
    } catch (err) {
      console.error("Create capsule error:", err);
      alert("Something went wrong creating your capsule. Check console.");
    }
  }, [
    title,
    message,
    selectedEmoji,
    selectedColor,
    selectedPrivacy,
    selectedMood,
    surpriseMode,
    revealDate,
    revealTime,
    coverImageBase64,
    attachedImageBase64,
    audioBase64,
    markdownFile,
    token,
    navigate
  ]);

  return {
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
    audioBase64, setAudioBase64,
    markdownFile, setMarkdownFile,
    handleFileToBase64,
    handleAudioChange,
    handleMarkdownChange,
    handleSubmit,
    navigate 
  };
};
