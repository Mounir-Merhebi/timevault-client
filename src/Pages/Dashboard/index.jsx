import "./index.css";
import Navbar from "../../components/Shared/navbar";
import Footer from "../../components/Shared/footer";
import LockedCapsule from "../../components/DashboardCapsules/LockedCapsule";
import OpenedCapsule from "../../components/DashboardCapsules/OpenedCapsule";
import StatsCard from "../../components/Shared/StatsCard";
import { useNavigate} from "react-router-dom"; 
import { useDashboardLogic } from './logic';

const Dashboard = () => {
  const navigate = useNavigate(); 

  const {
    username,
    activeFilter,
    isLoading,
    totalCapsulesCount,
    waitingCapsulesCount,
    publicCapsulesCount,
    openedCapsulesCount,
    readyToOpenCount,
    filteredCapsules,
    setActiveFilter,
  } = useDashboardLogic();

  if (isLoading) {
    return (
      <div>
        <Navbar activeLink="Dashboard" />
        <main className="db-main-content">
          <p>Loading dashboard content...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar activeLink="Dashboard" />
      <main className="db-main-content">
        <section className="db-welcome-section">
          <h1 className="db-welcome-title">Welcome back, {username}!</h1>
          <p className="db-welcome-subtitle">
            You have {waitingCapsulesCount} capsules waiting and {readyToOpenCount} ready to be opened.
          </p>
          <div className="db-stats-grid">
            <StatsCard status="Total Capsules" number={totalCapsulesCount} />
            <StatsCard status="Waiting to Open" number={waitingCapsulesCount} />
            <StatsCard status="Revealed Capsules" number={openedCapsulesCount} />
            <StatsCard status="Public Capsules" number={publicCapsulesCount} />
          </div>
        </section>

        <section className="db-capsules-section">
          <div className="db-capsules-header">
            <h2 className="db-capsules-title">Your Time Capsules</h2>
            <div className="db-capsule-filters">
              <button
                className={`db-filter-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >All</button>
              <button
                className={`db-filter-btn ${activeFilter === "waiting" ? "active" : ""}`}
                onClick={() => setActiveFilter("waiting")}
              >Waiting</button>
              <button
                className={`db-filter-btn ${activeFilter === "opened" ? "active" : ""}`}
                onClick={() => setActiveFilter("opened")}
              >Revealed</button>
              <a className="db-new-capsule-btn" onClick={() => navigate("/CreateCapsule")}>
                New Capsule
              </a>
            </div>
          </div>

          <div className="db-capsules-grid">
            {filteredCapsules.length > 0 ? (
              filteredCapsules.map((capsule, index) =>
                capsule.is_revealed ? (
                  <OpenedCapsule
                    id={capsule.id}
                    title={capsule.title}
                    openedDate={capsule.reveal_date}
                    location={`${capsule.gps_latitude}, ${capsule.gps_longitude}`}
                    emoji={capsule.custom_emoji}
                    color={capsule.custom_color}
                    unlistedToken={capsule.unlisted_link_token}
                    surpriseMode={capsule.surprise_mode}
                    privacy={capsule.privacy_setting}
                    mood={capsule.mood}
                    coverImage={`http://127.0.0.1:8000/api/v0.1/user/app/private/images/${capsule.media_image_url?.split('/').pop()}`}
                    message={capsule.message}
                  />
                ) : (
                  <LockedCapsule
                    title={capsule.title}
                    reveal_date={capsule.reveal_date}
                    message={capsule.message}
                    location={`${capsule.gps_latitude}, ${capsule.gps_longitude}`}
                    privacy={capsule.privacy_setting}
                    emoji={capsule.custom_emoji}
                    color={capsule.custom_color}
                  />
                )
              )
            ) : (
              <p>No capsules found for this filter.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
