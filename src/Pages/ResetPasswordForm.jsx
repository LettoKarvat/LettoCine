import React, { useState } from 'react';
import styles from './LoginForm.module.css'; // Altere para o nome correto do seu arquivo de estilo
import { useNavigate } from 'react-router-dom'; // Importe useNavigate



const ResetPasswordForm = () => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); // Novo estado para verificar se o formulário foi enviado
    const navigate = useNavigate(); // Hook para navegar para diferentes rotas

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(import.meta.env.VITE_RESET, {
                method: 'POST',
                headers: {
                    'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
                    'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY, // substitua com seu REST API Key
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ email }), // envia o email como parâmetro
            });

            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            const data = await response.json();

            // Caso a requisição seja bem-sucedida, definimos o estado de 'submitted' para true
            setSubmitted(true);
            setErrorMessage(''); // Limpe qualquer mensagem de erro anterior
        } catch (error) {
            // Se ocorrer um erro, podemos definir uma mensagem de erro
            setErrorMessage('Ocorreu um erro ao redefinir a senha.');

        }
    };


    return (

        <div className={styles.form}>
            <form onSubmit={handleSubmit}>
                <p>Redefinição de Senha</p>

                {submitted && <div className={styles.successMessage}>Enviado link de recuperação de senha para seu email</div>}
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}

                <div className={styles.group}>
                    <input
                        required
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles['main-input']}
                    />
                    <span className={styles['highlight-span']}></span>
                    <label className={`${styles['label-email']} ${email && styles['label-email-hidden']}`}>Email</label>
                </div>

                <button type="submit" className={styles.submit}>
                    <span>{submitted ? 'Reenviar' : 'Enviar'}</span>
                </button>
            </form>
            <p className={styles.backToLogin}>
                <span onClick={() => navigate('/login')}>Voltar para Login</span>
            </p>
        </div>

    );
}

export default ResetPasswordForm;
