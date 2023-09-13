import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';
import '../App.css';

function LoginForm({ onLogin, errorMessage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Adicionado novo estado para rastrear a mensagem de erro

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };

    try {
      const result = await onLogin(data);

      if (result === "error") {
        // Defina a mensagem de erro aqui usando um método passado através das props

      } else {
        // Limpe a mensagem de erro em caso de sucesso
        // setDefinErro(null);
      }
    } catch (error) {

    }
  };



  return (
    <div>
      <form id="loginForm" className={styles.form} onSubmit={handleSubmit}>

        <p>Login</p>

        {/* Mostrar a mensagem de erro se errorMessage existir */}
        {errorMessage && <div className={styles.error}>Usuário ou senha incorreta</div>}
        <div className={styles.group}>
          <input
            required
            className={styles['main-input']}
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className={styles['highlight-span']}></span>
          <label className={`${styles['label-email']} ${email && styles['label-email-hidden']}`}>Email</label>
        </div>
        <div className={styles['container-1']}>
          <div className={styles.group}>
            <input
              required
              className={styles['main-input']}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className={styles['highlight-span']}></span>
            <label className={`${styles['label-email']} ${password && styles['label-email-hidden']}`}>Senha</label>
            <br />
            <Link to="/reset" className={styles.resetLink}>Esqueceu sua senha?</Link>
          </div>
        </div>
        <button className={styles.submit} type="submit"> <span>Entrar</span> </button>
        <Link to="/registro">Não tem uma conta? Registre-se!</Link>
      </form>

    </div>
  );
}

export default LoginForm;