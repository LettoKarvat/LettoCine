import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import './UsersName.css';
import './Price.css'
import '../App'
import { useRenewUser } from '../hooks/useRenewUser';

const UsersName = ({ token, setTotalUsers, setLoadingUsers }) => {
    const [users, setUsers] = useState([]);
    const [showRenewalBox, setShowRenewalBox] = useState(false);
    const [userRenew, setUserRenew] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false);
    const [copied, setCopied] = useState(false);
    
    

    
    
    const {
        monthsToRenew,
        setMonthsToRenew,
        qrData,
        setQrData,
        handleRenew
      } = useRenewUser();
      
    

      useEffect(() => {
        fetch(import.meta.env.VITE_ITENS, {
            method: "POST",
            headers: {
                'X-Parse-Application-Id': import.meta.env.VITE_REACT_APP_PARSE_APP_ID,
                'X-Parse-REST-API-Key': import.meta.env.VITE_REACT_APP_PARSE_API_KEY,
                'X-Parse-Session-Token': token
            }
        })
        .then(response => response.json())
        .then(data => {
            setUsers(data.result);
            setTotalUsers(data.result.length);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            
            // Limpar o localStorage se um erro ocorrer
            localStorage.removeItem('user');
            window.location.reload();
        })
        .finally(() => {
            setLoadingUsers(false);  // Isso garante que setLoadingUsers seja chamado depois de terminar a busca, independentemente do resultado.
        });
    }, []);
    
    const handleRenewalClick = (user) => {
        
        setUserRenew(user.name);
        setShowRenewalBox(true);
    };


    const handleOkClick = async (user) => {
        setIsProcessing(true);
        
        try {
            await handleRenew(user);
        } catch (error) {
            console.error("Ocorreu um erro ao renovar:", error);
        } finally {
            setIsProcessing(false); // garante que 'isProcessing' seja definido como false após a conclusão.
        }
    };
    

        const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text)
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
          };
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (showRenewalBox && !event.target.closest('.renewalBox')) {
                    setShowRenewalBox(false);
                    setQrData(null);  // Adicionado aqui
                }
            };
        
            document.addEventListener('mousedown', handleClickOutside);
        
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [showRenewalBox]);
    
    const handleCloseRenewalBox = () => {
        const box = document.querySelector('.renewalBox');
        box.classList.add('slideUp');  // Aplica a animação de subida
        setTimeout(() => {
            setShowRenewalBox(false);
            box.classList.remove('slideUp');  // Remove a classe para que o próximo ciclo de animação funcione corretamente
            setQrData(null); // Adicionado aqui
        }, 500);  // O tempo aqui deve ser igual ao tempo de duração da sua animação (0.5s)
    };
    
    const handleOverlayClick = () => {
        const overlay = document.querySelector('.overlay');
        overlay.classList.remove('overlay-visible'); 
        handleCloseRenewalBox(); 
    };
    
    const incrementMonths = () => {
        setMonthsToRenew(prevMonths => prevMonths + 1);
    };

    const decrementMonths = () => {
        if (monthsToRenew > 1) { // Para garantir que o valor nunca fique abaixo de 1
            setMonthsToRenew(prevMonths => prevMonths - 1);
        }
    };
    

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showRenewalBox && !event.target.closest('.renewalBox')) {
                setShowRenewalBox(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showRenewalBox]);

    const bodyEl = document.querySelector(".App")

    return (
        <div className="user">
    {users.map(user => (
        <div key={user.name}>
            <div className="card">
                <h2>User: {user.name}</h2>
                
                <ul>
                    <li><p>Senha: {user.senha}</p></li>
                    <li><p>Vencimento: {user.vencimento}</p></li>
                    <li><p>M3U: <a href={user.m3u}>Link M3U</a></p></li>
                    <li><p>SSIPTV: <a href={user.ssiptv}>Link SSIPTV</a></p></li>
                </ul>
    
                {/* Adicionando os botões de Renovação */}
                <button className="btnR" onClick={() => handleRenewalClick(user)}>Renovar</button>
            </div>
        </div>
    ))}
    
            <div className={`overlay ${showRenewalBox ? 'overlay-visible' : ''}`} onClick={handleOverlayClick}></div>
    
            {showRenewalBox && ReactDOM.createPortal(
                
    <div className={`renewalBox ${showRenewalBox ? 'renewalBox-visible' : ''}`}>
        <div className="header">
            <h2 className="title">Renovação</h2>
        </div>
        <div className="price-container">
                <span>{monthsToRenew} {monthsToRenew > 1 ? 'meses' : 'mês'} =</span>
                <span>R${monthsToRenew * 30},00</span>
            </div>

        <div className="lists">
            <div className="list">
                 {/* Isto é apenas um placeholder. Substitua pelo ícone ou imagem que deseja. */}
                <p>Quantos meses deseja renovar?</p>
                <div className="carde__counter">
                <button className="carde__btn" onClick={decrementMonths}>-</button>
                <input 
                        className="input-box"
                        type="number" 
                        value={monthsToRenew} 
                        onChange={e => {
                            const value = Number(e.target.value);
                            if (value <= 15) {
                                setMonthsToRenew(value);
                            }
                        }} 
                        min="1"
                        max="15"
                    />

                <button className="carde__btn" onClick={incrementMonths}>+</button>
                </div>
                </div>
                
        </div>
        <div >
            <br />
        <button className="button-container" onClick={() => handleOkClick(userRenew)} disabled={isProcessing}>
    Comprar
    <svg className="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
       
    </button>
    <br />
</div>
        
        {qrData && (
            <div>
                
                
                <h2 className="custom-h2">Seu QR Code:</h2>
                <img src={qrData.qrCodeImage} alt="QR Code" />
                <h2 className="custom-h2">Clique para copiar o código copia e cola:</h2>
                <div className="btn-container">
                <button className="Btn" onClick={handleCopyClick}>
                    <span className="text">{copied ? 'Copiado' : 'Copy'}</span>
                    <span className="svgIcon">
                        <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                        </svg>
                    </span>
                </button>

                </div>

            </div>
        )}
    </div>,
    bodyEl // Este é o nó DOM onde o portal será renderizado
)}
        </div>
    );
}

export default UsersName;
