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
import ResetPasswordForm from './Pages/ResetPasswordForm';

function App() {
  const [loading, setLoading] = useState(true);
  const [authenticating, setAuthenticating] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { auth, signUp, login, logout } = useAuth();
  const { loadingTest, testData, fetchTestData } = useFetchTestData(auth?.user?.token);
  const { deleteUser, loadingDelete } = useDeleteUser();



  const handleLogin = async (userData) => {
    setAuthenticating(true);
    try {
      const final = await login(userData);

      setAuthenticating(false);

      if (final === 'error') {
        setErrorMessage('Usuário ou senha incorretos');
        return 'error';
      } else {
        setErrorMessage(null); // Limpe a mensagem de erro em caso de sucesso
        return 'tudook';
      }
    } catch (error) {
      setAuthenticating(false);
      console.error('Ocorreu um erro durante o login:', error);
      setErrorMessage('Ocorreu um erro durante o login.');
      return 'error';
    }
  };


  const handleSignUp = async (userData) => {
    setAuthenticating(true);
    await signUp(userData);
    setAuthenticating(false);
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
        <div className="cssload-container">
          <ul className="cssload-flex-container">
            <li>
              <span className="cssload-loading cssload-one"></span>
              <span className="cssload-loading cssload-two"></span>
              <span className="cssload-loading-center"></span>
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
    <div className='App'>
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
              <Route path="/login" element={<LoginForm onLogin={handleLogin} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />} />
              <Route path="/registro" element={<SignUpForm onSignUp={handleSignUp} />} />
              <Route path="/reset" element={<ResetPasswordForm />} /> {/* Adicionando rota para o formulário de redefinição de senha */}
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;