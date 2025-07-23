import { useState, useEffect, useCallback } from "react";

const getTimeRemaining = (revealDate) => {
  const now = new Date();
  const reveal = new Date(revealDate);
  const diff = reveal - now;

  if (diff <= 0) {
    return {
      isRevealed: true,
      days: 0,
      hours: 0,
      minutes: 0
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return {
    isRevealed: false,
    days,
    hours,
    minutes
  };
};

export const useLockedCapsuleLogic = (revealDate) => {
  const [countdown, setCountdown] = useState(() => getTimeRemaining(revealDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getTimeRemaining(revealDate));
    }, 60000); 

    return () => clearInterval(interval); 
  }, [revealDate]); 
  
  const formattedDate = useCallback(() => {
    return new Date(revealDate).toLocaleDateString();
  }, [revealDate]);

  return {
    countdown,
    formattedDate
  };
};
