import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const usePublicWallLogic = () => {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    location: "All",
    mood: "All",
    timeRange: "All",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth");
      return;
    }

    const fetchCapsules = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v0.1/user/PublicWallCapsules",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.status === "success") {
          setCapsules(res.data.payload);
        } else {
          setError("Failed to load capsules");
        }
      } catch (err) {
        setError("Error fetching capsules");
      } finally {
        setLoading(false);
      }
    };

    fetchCapsules();
  }, [navigate]);

  const filteredCapsules = (() => {
    let result = [...capsules];

    if (filters.location !== "All") {
      result = result.filter((c) => c.location === filters.location);
    }

    if (filters.mood !== "All") {
      result = result.filter((c) => c.mood === filters.mood);
    }

    if (filters.timeRange !== "All") {
      const now = new Date();
      let daysAgo = 0;

      if (filters.timeRange === "Last 7 Days") daysAgo = 7;
      else if (filters.timeRange === "Last 30 Days") daysAgo = 30;

      const cutoffDate = new Date(now.setDate(now.getDate() - daysAgo));
      result = result.filter((c) => new Date(c.reveal_date) >= cutoffDate);
    }

    return result;
  })();

  const uniqueLocations = ["All", ...new Set(capsules.map((c) => c.location).filter(Boolean))];
  const uniqueMoods = ["All", ...new Set(capsules.map((c) => c.mood).filter(Boolean))];

  const handleFilterChange = useCallback((filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  }, []);

  return {
    capsules,
    filteredCapsules,
    loading,
    error,
    filters,
    uniqueLocations,
    uniqueMoods,
    handleFilterChange,
  };
};
