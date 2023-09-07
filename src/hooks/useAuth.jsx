import axios from 'axios';
import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = {
    user,
    isAuthenticated: user != null,
    logout: () => {
      localStorage.removeItem('user');
      setUser(null);
    },
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Este useEffect é responsável por salvar o usuário na localStorage sempre que ele mudar
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  const signUp = async (data) => {
    setLoading(true);
    setError(null);

    const newUser = {
      email: data.email,
      password: data.password,
      fullname: data.fullname,
    };

    try {
      const response = await axios.post(import.meta.env.VITE_SIGNUP, newUser, {
        headers: {
          'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
          'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
        },
      });

      setUser(response.data.result); // Atualizar o estado do usuário
      setLoading(false);

      return response.data.result;
    
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error('Error creating user', error);
    }
  };

  const login = async (data) => {
    setLoading(true);
    const loginUser = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post(import.meta.env.VITE_LOGIN, loginUser, {
        headers: {
          'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
          'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
        },
      });

      setUser(response.data.result); // Atualizar o estado do usuário
      setLoading(false);
      
      return response.data.result;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error('Error logging in user', error);
      localStorage.removeItem('user');
    }
  };

  return {
    auth,
    signUp,
    login,
    error,
    loading,
  };
};
