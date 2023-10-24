import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'
import '../Loading.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Menu({ isMenuVisible, setIsMenuVisible, auth }) {
    return (
        <div className={`menu ${isMenuVisible ? 'menu--visible' : ''}`}>


            <label
                className={`buttons__burger ${isMenuVisible ? 'buttons__burger--left' : ''}`}
                htmlFor="burger"
            >
                <input type="checkbox" id="burger" onClick={() => setIsMenuVisible(!isMenuVisible)} />
                <span></span>
                <span></span>
                <span></span>
            </label>

            {isMenuVisible && (
                <div>
                    <ul>
                        <li>
                            <Link to="/applications">
                                <button className='button1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path></svg>
                                    <span>Aplicativos</span>
                                </button>
                            </Link>
                        </li>

                        <li>
                            <Link to="/">
                                <button className='button2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#FFFFFF"></path>
                                    </svg>
                                    <span>Usuários</span>
                                </button>


                                <a href="https://api.whatsapp.com/send?phone=5547996601626&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20as%20vantagens%20de%20ser%20um%20revendedor%20LettoCine!%20" className="whatsapp-support-button">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Seja um <br />
                                    revendedor!
                                </a>
                                <br />
                                <a href="https://wa.me/47996601626" className="whatsapp-support-button">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                    Suporte!
                                </a>
                            </Link>

                        </li>

                        <button data-label="Register" className="rainbow-hover" onClick={auth.logout}>
                            <span className="sp">S a i r</span>
                        </button>

                    </ul>
                </div>
            )}
        </div>
    );
}

export default Menu;
