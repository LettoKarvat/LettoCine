import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css'; // Certifique-se de importar os estilos apropriados

function SignUpForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password, fullname };
    props.onSignUp(data);
  };

  return (
    <div className={styles.someClass}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Sign Up</p>
        <div className={styles.group}>
          <input
            required
            className={styles['main-input']}
            type="text"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
          />
          <span className={styles['highlight-span']}></span>
          <label className={`${styles['label-email']} ${fullname && styles['label-email-hidden']}`}>Nome</label>
        </div>
        <div className={styles.group}>
          <input
            required
            className={styles['main-input']}
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <span className={styles['highlight-span']}></span>
          <label className={`${styles['label-email']} ${email && styles['label-email-hidden']}`}>Email</label>
        </div>
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
        <button className={styles.submit} type="submit"><span>Registre-se</span></button>
        <Link to="/login">Já tem uma conta? Entre agora!</Link>
      </form>
     
    </div>
  );
}

export default SignUpForm;
