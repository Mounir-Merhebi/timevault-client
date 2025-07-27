import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const useProfileLogic = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    memberSince: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {

    if (!userId || !token) {
      navigate('/auth');
      setIsLoading(false); 
      return;
    }
    
    axios.get(`http://localhost:8000/api/v0.1/user/Profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      const data = res.data.payload;
      setFormData({
        username: data.username,
        email: data.email,
        password: '', 
        memberSince: data.created_at ? new Date(data.created_at).toLocaleDateString() : '',
      });
      setIsLoading(false); 
    })
    .catch((err) => {
      console.error('Error fetching profile:', err);
      setError('Failed to load profile data. Please try again.');
      setIsLoading(false); 
    });
  }, [userId, token, navigate]); 

  const handleChange = useCallback((e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []); 

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setError(null); 
    setSuccessMessage(null); 

    try {
      await axios.post(`http://localhost:8000/api/v0.1/user/ProfileUpdate/${userId}`, {
        username: formData.username,
        email: formData.email,
        ...(formData.password && { password: formData.password }),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuccessMessage('Profile updated successfully!');
      setFormData(prev => ({ ...prev, password: '' })); 
    } catch (err) {
      console.error('Update error:', err);
      setError('Failed to update profile. Please check your input.');
    } finally {
      setIsLoading(false); 
    }
  }, [formData, userId, token]); 

  return {
    formData,
    isLoading,
    error,
    successMessage,
    handleChange,
    handleSubmit,
  };
};
