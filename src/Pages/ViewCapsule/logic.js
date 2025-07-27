import { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const useViewCapsuleLogic = (capsuleId) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [capsule, setCapsule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState(null);

  useEffect(() => {
    if (!token) {
      navigate("/auth");
      return;
    }

    const fetchCapsule = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v0.1/user/ViewCapsule/${capsuleId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCapsule(res.data.payload);

        console.log("Capsule data received:", res.data.payload);
        console.log("text_note:", res.data.payload.text_note);

        if (res.data.payload.text_note) {
          const markdownFileName = res.data.payload.text_note.split('/').pop();
          const markdownRes = await axios.get(`http://127.0.0.1:8000/api/v0.1/app/private/notes/${markdownFileName}`);
          setMarkdownContent(markdownRes.data);
          console.log("Fetched markdown content:", markdownRes.data);
        } else {
            setMarkdownContent(null);
        }

      } catch (err) {
        console.error("Failed to fetch capsule or markdown:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCapsule();
  }, [capsuleId, token, navigate]);

  const getMoodDisplay = useCallback((mood) => {
    const moods = {
      'hopeful': '🌟 Hopeful',
      'nostalgic': '🌅 Nostalgic',
      'excited': '🎉 Excited',
      'reflective': '🤔 Reflective',
      'grateful': '🙏 Grateful',
      'adventurous': '🚀 Adventurous',
      'peaceful': '🕊️ Peaceful',
      'curious': '🔍 Curious'
    };
    return moods[mood] || mood;
  }, []);

  const getAudioUrl = useCallback((audioPathFromDb) => {
    if (!audioPathFromDb) return null;
    const fileName = audioPathFromDb.split('/').pop();
    return `http://127.0.0.1:8000/api/v0.1/app/private/audios/${fileName}`;
  }, []);

  const getImageUrl = useCallback((imagePathFromDb, type) => {
    if (!imagePathFromDb) return null;
    const fileName = imagePathFromDb.split('/').pop();
      return `http://127.0.0.1:8000/api/v0.1/user/app/private/images/${fileName}`;
  }, []);


  const handleDownloadPdf = useCallback((componentCurrentRef, capsuleTitle) => {
    if (!componentCurrentRef) return console.error("Nothing to capture!");

    html2canvas(componentCurrentRef, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgProps = canvas.width / canvas.height;
      let height = pdfWidth / imgProps;
      if (height > pdfHeight) {
        height = pdfHeight;
      }

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, height);
      pdf.save(`${capsuleTitle || "capsule-details"}.pdf`);
    });
  }, []);

  return {
    capsule,
    isLoading,
    getMoodDisplay,
    getAudioUrl,
    getImageUrl, 
    markdownContent,
    handleDownloadPdf,
  };
};