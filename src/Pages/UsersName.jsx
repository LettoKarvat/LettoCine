import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';  // Importe a biblioteca moment aqui

import './UsersName.css';
import './Price.css'
import '../App'
import './Copy.css'

import { useRenewUser } from '../hooks/useRenewUser';

const UsersName = ({ token, setTotalUsers, setLoadingUsers }) => {
    const [users, setUsers] = useState([]);
    const [showRenewalBox, setShowRenewalBox] = useState(false);
    const [userRenew, setUserRenew] = useState(null)
    const [isProcessing, setIsProcessing] = useState(false);
    const [copied, setCopied] = useState(false);

    const nameRef = useRef(null);
    const passwordRef = useRef(null);



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

    const apertabotao = () => {
        console.log('ain')
    }


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
                        <h2>
                            <span className="UserSenha">User:</span> <div className="user-info-container">
                                <h5 className="user-name">
                                    {user.name}
                                </h5>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.name)}>
                                    <span
                                        data-text-end="Copied!"
                                        data-text-initial="Copy to clipboard"
                                        className="tooltip"
                                    ></span>
                                    <span>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 6.35 6.35"
                                            y="0"
                                            x="0"
                                            height="18"
                                            width="18"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="clipboard"
                                        >
                                            <g>
                                                <path
                                                    fill="currentColor"
                                                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                                                ></path>
                                            </g>
                                        </svg>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 24 24"
                                            y="0"
                                            x="0"
                                            height="16"
                                            width="16"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="checkmark"
                                        >
                                            <g>
                                                <path
                                                    data-original="#000000"
                                                    fill="currentColor"
                                                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <span className="UserSenha">Senha:</span> <div className="user-info-container">
                                <h5 className="user-name">
                                    {user.senha}
                                </h5>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.senha)}>
                                    <span
                                        data-text-end="Copied!"
                                        data-text-initial="Copy to clipboard"
                                        className="tooltip"
                                    ></span>
                                    <span>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 6.35 6.35"
                                            y="0"
                                            x="0"
                                            height="18"
                                            width="18"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="clipboard"
                                        >
                                            <g>
                                                <path
                                                    fill="currentColor"
                                                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                                                ></path>
                                            </g>
                                        </svg>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 24 24"
                                            y="0"
                                            x="0"
                                            height="16"
                                            width="16"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="checkmark"
                                        >
                                            <g>
                                                <path
                                                    data-original="#000000"
                                                    fill="currentColor"
                                                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </h2>

                        <ul>
                            <li> </li>
                            <li>
                                <p style={{
                                    color: (() => {


                                        const now = moment();
                                        const expiryDate = moment(user.vencimento, 'DD/MM/YY HH:mm:ss');
                                        if (expiryDate.isBefore(now)) {
                                            return 'red'; // Vermelho se a data de vencimento já passou
                                        }
                                        if (expiryDate.isBefore(now.clone().add(7, 'days'))) {
                                            return 'yellow'; // Amarelo se a data de vencimento é em até 7 dias
                                        }
                                        return 'black'; // Preto para qualquer outro caso
                                    })(),
                                }}>
                                    Vencimento: {user.vencimento}
                                </p>
                            </li>
                            <li className='user-info-container'><p className='user-name'>M3U: <a href={user.m3u}>Link M3U</a></p>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.m3u)}>
                                    <span
                                        data-text-end="Copied!"
                                        data-text-initial="Copy to clipboard"
                                        className="tooltip"
                                    ></span>
                                    <span>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 6.35 6.35"
                                            y="0"
                                            x="0"
                                            height="15"
                                            width="15"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="clipboard"
                                        >
                                            <g>
                                                <path
                                                    fill="currentColor"
                                                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                                                ></path>
                                            </g>
                                        </svg>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 24 24"
                                            y="0"
                                            x="0"
                                            height="15"
                                            width="15"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="checkmark"
                                        >
                                            <g>
                                                <path
                                                    data-original="#000000"
                                                    fill="currentColor"
                                                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </li>
                            <li className='user-info-container'><p className='user-p'>SSIPTV: <a href={user.ssiptv}>Link SSIPTV</a></p>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.ssiptv)}>
                                    <span
                                        data-text-end="Copied!"
                                        data-text-initial="Copy to clipboard"
                                        className="tooltip"
                                    ></span>
                                    <span>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 6.35 6.35"
                                            y="0"
                                            x="0"
                                            height="15"
                                            width="15"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="clipboard"
                                        >
                                            <g>
                                                <path
                                                    fill="currentColor"
                                                    d="M2.43.265c-.3 0-.548.236-.573.53h-.328a.74.74 0 0 0-.735.734v3.822a.74.74 0 0 0 .735.734H4.82a.74.74 0 0 0 .735-.734V1.529a.74.74 0 0 0-.735-.735h-.328a.58.58 0 0 0-.573-.53zm0 .529h1.49c.032 0 .049.017.049.049v.431c0 .032-.017.049-.049.049H2.43c-.032 0-.05-.017-.05-.049V.843c0-.032.018-.05.05-.05zm-.901.53h.328c.026.292.274.528.573.528h1.49a.58.58 0 0 0 .573-.529h.328a.2.2 0 0 1 .206.206v3.822a.2.2 0 0 1-.206.205H1.53a.2.2 0 0 1-.206-.205V1.529a.2.2 0 0 1 .206-.206z"
                                                ></path>
                                            </g>
                                        </svg>
                                        <svg
                                            xmlSpace="preserve"
                                            style={{ enableBackground: "new 0 0 512 512" }}
                                            viewBox="0 0 24 24"
                                            y="0"
                                            x="0"
                                            height="15"
                                            width="15"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="checkmark"
                                        >
                                            <g>
                                                <path
                                                    data-original="#000000"
                                                    fill="currentColor"
                                                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                                                ></path>
                                            </g>
                                        </svg>
                                    </span>
                                </div>
                            </li>
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
                            <img className='imge' src={qrData.qrCodeImage} alt="QR Code" />
                            <h2 className="custom-h2">Clique para copiar o código copia e cola:</h2>
                            <div className="btn-container">
                                <button className={`Btn ${copied ? 'flash' : ''}`} onClick={() => copyToClipboard(qrData.copiaecola)}>
                                    <span className="text">{copied ? 'Copiado' : 'Copiar'}</span>
                                    <span className="svgIcon">
                                        {copied ? (
                                            <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm0 1.5c-4.69 0-8.498 3.807-8.498 8.497s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.497-8.497-8.497zm-5.049 8.886 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero" /></svg>
                                        ) : (
                                            <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path>
                                            </svg>
                                        )}
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
