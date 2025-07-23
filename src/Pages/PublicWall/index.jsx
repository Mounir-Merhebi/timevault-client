import "./index.css";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/Shared/navbar";
import Footer from "../../components/Shared/footer";
import PublicCapsule from "../../components/PublicWallCapsules/PublicCapsule";
import { usePublicWallLogic } from './logic';

const PublicWall = () => {
  const {
    capsules,
    filteredCapsules,
    loading,
    error,
    filters,
    uniqueLocations,
    uniqueMoods,
    handleFilterChange,
  } = usePublicWallLogic();

  const navigate = useNavigate();

  return (
    <div>
      <Navbar activeLink="PublicWall" />
      <main className="pw-main-content">
        <section className="pw-hero-section">
          <h1 className="pw-hero-title">Public Wall</h1>
          <p className="pw-hero-subtitle">
            Discover amazing time capsules from the TimeVault community
          </p>

          <div className="pw-stats-grid">
            <div className="pw-stat-item">
              <div className="pw-stat-number">{capsules.length}</div>
              <div className="pw-stat-label">Public Capsules</div>
            </div>
          </div>
        </section>

        <section className="pw-explore-section">
          <div className="pw-explore-header">
            <h2 className="pw-explore-title">Explore Time Capsules</h2>
            <div className="pw-explore-controls" style={{ display: "flex", gap: "1rem" }}>
              <div className="pw-filter-group">
                <label className="pw-filter-label">Location</label>
                <select
                  className="pw-sort-select"
                  value={filters.location}
                  onChange={(e) => handleFilterChange("location", e.target.value)}
                >
                  {uniqueLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pw-filter-group">
                <label className="pw-filter-label">Mood</label>
                <select
                  className="pw-sort-select"
                  value={filters.mood}
                  onChange={(e) => handleFilterChange("mood", e.target.value)}
                >
                  {uniqueMoods.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pw-filter-group">
                <label className="pw-filter-label">Time Range</label>
                <select
                  className="pw-sort-select"
                  value={filters.timeRange}
                  onChange={(e) => handleFilterChange("timeRange", e.target.value)}
                >
                  <option value="All">All Time</option>
                  <option value="Last 7 Days">Last 7 Days</option>
                  <option value="Last 30 Days">Last 30 Days</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pw-capsules-grid">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              filteredCapsules.map((capsule) => (
                <PublicCapsule
                  key={capsule.id}
                  id={capsule.id}
                  author={capsule.user.username}
                  location={capsule.location}
                  emoji={capsule.custom_emoji}
                  color={capsule.custom_color}
                  mood={capsule.mood}
                  coverImage={`http://127.0.0.1:8000/api/v0.1/user/app/private/images/${capsule.media_image_url?.split('/').pop()}`}
                  title={capsule.title}
                  preview={capsule.message.substring(0, 100) + "..."}
                  revealDate={capsule.reveal_date}
                />
              ))
            )}
          </div>
        </section>

        <section className="pw-load-more-section"></section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicWall;
