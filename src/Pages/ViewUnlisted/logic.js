import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const useUnlistedViewCapsuleLogic = (unlistedToken) => {
  const navigate = useNavigate(); 
  const [capsule, setCapsule] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState(null);

  useEffect(() => {
    const fetchCapsule = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/v0.1/capsule/${unlistedToken}`);
        setCapsule(res.data.payload);



          if (res.data.payload.text_note) {
          const markdownFileName = res.data.payload.text_note.split('/').pop();
          const markdownRes = await axios.get(`http://127.0.0.1:8000/api/v0.1/app/private/notes/${markdownFileName}`);
          setMarkdownContent(markdownRes.data);
          console.log("Fetched markdown content:", markdownRes.data); 
        } else {
            setMarkdownContent(null);
        }

      } catch (err) {
        console.error("Failed to fetch capsule:", err);
      } finally {
        setIsLoading(false);
      }
    };

    if (unlistedToken) {
      fetchCapsule();
    } else {
      setIsLoading(false); 
    }
  }, [unlistedToken, navigate]); 

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

  const handleDownloadPdf = useCallback((componentCurrentRef, capsuleTitle) => {
    if (!componentCurrentRef) {
      console.error("Nothing to capture for PDF!");
      return;
    }

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
    markdownContent, 
    handleDownloadPdf,
    navigate 
  };
};
