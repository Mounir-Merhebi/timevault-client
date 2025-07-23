import React, { useRef } from "react";
import "./index.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  User, Calendar, Clock, MapPin, Shield, Sparkles, Share2, Home
} from 'lucide-react';
import Navbar from "../../components/Shared/navbar";
import { useViewCapsuleLogic } from './logic';


const ViewCapsule = () => {
  const componentRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    capsule,
    isLoading,
    getMoodDisplay,
    getAudioUrl,
    markdownContent, 
    handleDownloadPdf,
  } = useViewCapsuleLogic(id);


  if (isLoading) return <div>Loading...</div>;
  if (!capsule) return <div>No capsule found.</div>;

  const borderColorStyle = { border: `6px solid ${capsule.custom_color}` };
  const audioSrc = getAudioUrl(capsule.audio_file_url);

  return (
    <div>
      <Navbar activeLink="ViewCapsule" />
        <main className="vc-main-content" ref={componentRef}>
        <section className="vc-section" style={borderColorStyle}>
          <h1 className="vc-title">{capsule.title}</h1>

          <div className="vc-visual-identity">
            <div className="vc-capsule-emoji">{capsule.custom_emoji}</div>
          </div>

          <img
            src={`http://127.0.0.1:8000/api/v0.1/user/app/private/images/${capsule.cover_image_url?.split('/').pop()}`}
            alt="Time Capsule"
            className="cc-preview-img"
          />

          {capsule.surprise_mode ? (
            <div className="vc-surprise-indicator">
              <Sparkles className="icon" />
              This was a surprise capsule - content was hidden until reveal!
            </div>
          ) : null}

          {capsule.mood && (
            <div className="vc-mood-display">
              Mood: {getMoodDisplay(capsule.mood)}
            </div>
          )}

          <div className="vc-meta-info" >
            <div className="vc-meta-item"><User className="icon" />Created by: {capsule.user.username}</div>
            <div className="vc-meta-item"><Calendar className="icon" />Created: {new Date(capsule.created_at).toDateString()}</div>
            <div className="vc-meta-item"><Clock className="icon" />Opened: {new Date(capsule.reveal_date).toDateString()}</div>
            <div className="vc-meta-item"><MapPin className="icon" />Location: {capsule.gps_latitude}, {capsule.gps_longitude}</div>
            <div className="vc-meta-item"><MapPin className="icon" />Country: {capsule.location}</div>
            <div className="vc-meta-item"><Shield className="icon" />Privacy: {capsule.privacy_setting}</div>
          </div>

          <div className="vc-view-location-section">
            <iframe
              title="Mini Map"
              width="100%"
              height="200"
              src={`https://maps.google.com/maps?q=${capsule.gps_latitude},${capsule.gps_longitude}&z=13&output=embed`}
              allowFullScreen
            ></iframe>
          </div>

          <div className="vc-message-content">
            <p>{capsule.message}</p>
          </div>

          <div className="vc-attachment-section">
            <h3 className="vc-attachment-title">📎 Attached Content</h3>

            {/* Display image if available */}
            {capsule.media_image_url && (
                <div className="vc-attachment-container">
                    <img
                        src={`http://127.0.0.1:8000/api/v0.1/user/app/private/images/${capsule.media_image_url.split('/').pop()}`}
                        alt="Attached media"
                    />
                    <p className="vc-attachment-label">Attached Image</p>
                </div>
            )}

   
            {audioSrc && (
              <div className="vc-attachment-container">
                <audio controls>
                  <source src={audioSrc} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p className="vc-attachment-label">Voice note</p>
              </div>
            )}

      
            {markdownContent && (
              <div className="vc-attachment-container">
                <pre className="vc-attachment-pre">{markdownContent}</pre>
                <p className="vc-attachment-label">Attached Notes (Markdown)</p>
              </div>
            )}
          </div>

          <div className="vc-actions">
            <Link to="/dashboard" className="vc-btn vc-btn-secondary">
              <Home className="icon" />Go to Dashboard
            </Link>

            <button className="vc-btn vc-btn-primary" onClick={() => handleDownloadPdf(componentRef.current, capsule.title)}>
              <Share2 />Export this capsule
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewCapsule;