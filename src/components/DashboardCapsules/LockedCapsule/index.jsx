import "./index.css";
import { useLockedCapsuleLogic } from './logic'; 

const LockedCapsule = ({
    title = "My Future Self",
    reveal_date = "2025-01-01",
    gps_latitude = "0.0",
    gps_longitude = "0.0",
    privacy = "private",
    emoji = "🔒",
    color = "#cccccc"
}) => {
    const location = `${gps_latitude}, ${gps_longitude}`;
    const { countdown, formattedDate } = useLockedCapsuleLogic(reveal_date);

    return (
        <div className="lc-capsule-card" style={{ borderLeft: `4px solid ${color}` }}>
            <div className="lc-capsule-header">
                <div className={`lc-capsule-privacy ${privacy}`}>{privacy}</div>
                <div className="lc-capsule-emoji">{emoji}</div>
            </div>
            <h3 className="lc-capsule-title">{title}</h3>
            <p className="lc-capsule-status">Waiting to open</p>
            <div className="lc-capsule-meta">
                <div className="lc-capsule-meta-item">📍 {location}</div>
                <div className="lc-capsule-meta-item">📅 Opens on {formattedDate()}</div>
            </div>
            <div className="lc-capsule-countdown">
                <span className="lc-countdown-icon">⏰</span>
                {countdown.isRevealed
                    ? "Revealed"
                    : `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m`}
            </div>
        </div>
    );
};
export default LockedCapsule;
