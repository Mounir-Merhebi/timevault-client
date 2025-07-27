import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useDashboardLogic = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username"); 

  const [capsules, setCapsules] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [totalCapsulesCount, setTotalCapsulesCount] = useState(0);
  const [waitingCapsulesCount, setWaitingCapsulesCount] = useState(0);
  const [publicCapsulesCount, setPublicCapsulesCount] = useState(0);
  const [openedCapsulesCount, setOpenedCapsulesCount] = useState(0);

  useEffect(() => {
    if (!userId || !token) {
      navigate("/auth");
      return;
    }

    const fetchDashboardData = async () => {
      setIsLoading(true); 
      const baseUrl = "http://localhost:8000/api/v0.1/user";
      const headers = { Authorization: `Bearer ${token}` };

      try {
        const [
          capsuleRes,
          totalCountRes,
          waitingCountRes,
          publicCountRes,
          openedCountRes
        ] = await Promise.all([
          axios.get(`${baseUrl}/Dashboard/${userId}`, { headers }),
          axios.get(`${baseUrl}/DashboardTotalCount/${userId}`, { headers }),
          axios.get(`${baseUrl}/DashboardWaitingCount/${userId}`, { headers }),
          axios.get(`${baseUrl}/DashboardPublicCount/${userId}`, { headers }),
          axios.get(`${baseUrl}/DashboardOpenedCount/${userId}`, { headers })
        ]);

        const fetchedCapsules = capsuleRes.data.payload;
        setCapsules(Array.isArray(fetchedCapsules) ? fetchedCapsules : []);

        setTotalCapsulesCount(totalCountRes.data.payload);
        setWaitingCapsulesCount(waitingCountRes.data.payload);
        setPublicCapsulesCount(publicCountRes.data.payload);
        setOpenedCapsulesCount(openedCountRes.data.payload);

      } catch (error) {
        console.error("Error loading dashboard:", error);
        if (error.response && error.response.status === 401) {
          navigate("/auth");
        }
      } finally {
        setIsLoading(false); 
      }
    };

    fetchDashboardData();
  }, [userId, token, navigate]); 

  const readyToOpenCount = capsules.filter(c => c.is_revealed && !c.surprise_mode).length;

  const filteredCapsules = capsules.filter(capsule => {
    switch (activeFilter) {
      case "all":
        return true; 
      case "waiting":
        return !capsule.is_revealed; 
      case "opened":
        return capsule.is_revealed; 
      default:
        return true; 
    }
  });

  return {
    username,
    capsules,
    activeFilter,
    isLoading,
    totalCapsulesCount,
    waitingCapsulesCount,
    publicCapsulesCount,
    openedCapsulesCount,
    readyToOpenCount,
    filteredCapsules,
    setActiveFilter: useCallback((filter) => setActiveFilter(filter), []) 
  };
};
