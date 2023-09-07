import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password };
    props.onLogin(data);
  };

  return (
    <div className={styles.someClass}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Login</p>
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
          </div>
        </div>
        <button className={styles.submit} type="submit"> <span>Entrar</span> </button>
        <Link to="/registro">Não tem uma conta? Registre-se!</Link>
      </form>
      
    </div>
  );
}

export default LoginForm;
