import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';  // Importe a biblioteca moment aqui

import './UsersName.css';
import './TitleRenew.css'
import '../App'
import '../assets/Copy.css'

import Starter from '../assets/Starter';

import { useRenewUser } from '../hooks/useRenewUser';
import Copy from '../assets/Copy';

const UsersName = ({ token, setTotalUsers, setLoadingUsers }) => {
    const [users, setUsers] = useState([]);
    const [showRenewalBox, setShowRenewalBox] = useState(false);
    const [userRenew, setUserRenew] = useState(null)
    const [outro, setOutro] = useState(null)
    const [copied, setCopied] = useState(false);

    const nameRef = useRef(null);
    const passwordRef = useRef(null);



    const {
        qrData,
        setQrData,
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
                                    <Copy altura1={'18'} altura2={'16'} />
                                </div>
                            </div>

                            <span className="UserSenha">Senha:</span> <div className="user-info-container">
                                <h5 className="user-name">
                                    {user.senha}
                                </h5>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.senha)}>
                                    <Copy altura1={'18'} altura2={'16'} />
                                </div>
                            </div>
                        </h2>
                        <ul>
                            <li className='user-info-container'><p className='user-name'> <a href={user.m3u}>Lista M3U</a></p>

                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.m3u)}>
                                    <Copy altura1={'15'} altura2={'15'} />
                                </div>
                            </li>
                            <li className='user-info-container'><p className='user-name'> <a href={user.ssiptv}>Lista SSIPTV</a></p>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard(user.ssiptv)}>
                                    <Copy altura1={'15'} altura2={'15'} />
                                </div>
                            </li>
                            <li className='user-info-container'><p className='user-name'> <a href='http://dns.acaidopara.net:8080'>URL DNS</a></p>
                                <div className="copy" role='button' tabIndex="0" onClick={() => copyToClipboard('http://dns.acaidopara.net:8080')}>
                                    <Copy altura1={'15'} altura2={'15'} />
                                </div>
                            </li>



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
                                        return 'green'; // Verde para qualquer outro caso
                                    })(),
                                }}>
                                    Vencimento: {user.vencimento}
                                </p>
                            </li>

                        </ul>
                        <button className="btnR" onClick={() => handleRenewalClick(user)}>Ver <br /> Planos </button>
                    </div>
                </div>
            ))}

            <div className={`overlay ${showRenewalBox ? 'overlay-visible' : ''}`} onClick={handleOverlayClick}></div>

            {showRenewalBox && ReactDOM.createPortal(

                <div className={`renewalBox ${showRenewalBox ? 'renewalBox-visible' : ''}`}>
                    <div className="header">
                        <h2 className="title">PLANOS</h2>
                    </div>
                    <div className='flex-Item'>
                        <Starter Valor={"35"} Meses={"1 mês"} Descricao={""} plano={1} userRenew={userRenew} setOutro={setOutro} outro={outro} showCouponInput={true} />
                        <Starter Valor={"85"} Meses={"3 meses"} Descricao={"Popular          "} plano={2} userRenew={userRenew} setOutro={setOutro} outro={outro} showCouponInput={false} />
                        <Starter Valor={"150"} Meses={"6 meses"} Descricao={"Maior desconto"} plano={3} userRenew={userRenew} setOutro={setOutro} outro={outro} showCouponInput={false} />

                    </div>


                </div>,
                bodyEl // Este é o nó DOM onde o portal será renderizado
            )}
        </div>
    );
}

export default UsersName;