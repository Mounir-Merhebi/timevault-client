import "./index.css";
import Navbar from "../../components/Shared/navbar";
import { CircleUser } from 'lucide-react';
import { useProfileLogic } from './logic';

const Profile = () => {
  const {
    formData,
    isLoading,
    error,
    successMessage,
    handleChange,
    handleSubmit,
  } = useProfileLogic();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-700">Loading profile...</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar activeLink="Profile" />
      <main className="pf-main-content">
        <aside className="pf-profile-sidebar">
          <div className="pf-profile-header">
            <div className="pf-profile-avatar"><CircleUser size={64}/></div>
            <div className="pf-profile-name">{formData.username}</div>
            <div className="pf-profile-email">{formData.email}</div>
          </div>
          <div className="pf-profile-info">
            <div className="pf-info-item">
              <div className="pf-info-icon">📅</div>
              <div className="pf-info-content">
                <div className="pf-info-label">Member Since</div>
                <div className="pf-info-value">{formData.memberSince}</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="pf-profile-content">
          <div className="pf-content-card">
            <div className="pf-card-header">
              <h2 className="pf-card-title">Personal Information</h2>
            </div>
            <div className="pf-card-content">
        
              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{successMessage}</span>
                </div>
              )}
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="pf-form-row">
                  <div className="pf-form-group">
                    <label className="pf-form-label">Username</label>
                    <input
                      type="text"
                      className="pf-form-input"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="pf-form-group">
                    <label className="pf-form-label">Password</label>
                    <input
                      type="password"
                      className="pf-form-input"
                      name="password"
                      placeholder="Change your password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="pf-form-group">
                  <label className="pf-form-label">Email</label>
                  <input
                    type="email"
                    className="pf-form-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="pf-form-actions">
                  <button type="button" className="pf-btn pf-btn-cancel" onClick={() => window.history.back()}>
                    Cancel
                  </button>
                  <button type="submit" className="pf-btn pf-btn-save" disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
