import './App.css';
import './Loading.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

// Contexts
import { AuthProvider } from './context/authContext';

// Hooks
import { useAuth } from './hooks/useAuth';
import useFetchTestData from './hooks/useFetchTestData';
import useDeleteUser from './hooks/useDeleteUser';

// Pages
import LoginForm from './Pages/LoginForm';
import SignUpForm from './Pages/SignUpForm';
import Home from './Pages/HomePage';

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);
  const [deleteUsername, setDeleteUsername] = useState("");

  const { auth, signUp, login, logout } = useAuth();
  const { loadingTest, testData, fetchTestData } = useFetchTestData(auth?.user?.token);
  const { deleteUser, loadingDelete } = useDeleteUser();

  const handleLogin = async (userData) => {
    setAuthenticating(true);
    await login(userData);
    setAuthenticating(false);
  };

  const handleSignUp = async (userData) => {
    setAuthenticating(true);
    await signUp(userData);
    setAuthenticating(false);
  };

  const handleDeleteUser = () => {
    deleteUser(deleteUsername);
  };

  // Check localStorage when the component mounts
  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      login(authData);
    }
    setLoading(false);
  }, [login]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (authenticating) {
    return (
        <div className="App">
           <div class="cssload-container">
   <ul class="cssload-flex-container">
      <li>
         <span class="cssload-loading cssload-one"></span>
         <span class="cssload-loading cssload-two"></span>
         <span class="cssload-loading-center"></span>
      </li>
   </ul>
</div>
        </div>
    );
}


  if (loadingDelete) {
    return <div className="App"><p>Deletando...</p></div>;
  }

  return (
    <div className="App">
      
      <AuthProvider value={{ auth, login, logout, signUp }}>
        <Router>
          {auth.isAuthenticated ? (
            <Routes>
              <Route path="/" element={<Home 
                auth={auth} 
                fetchTestData={fetchTestData} 
                loadingTest={loadingTest}
                
              />} />
              
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              <Route path="/registro" element={<SignUpForm onSignUp={handleSignUp} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
