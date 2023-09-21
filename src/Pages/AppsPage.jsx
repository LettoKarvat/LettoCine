import React, { useState } from 'react';
import Menu from '../assets/Menu';
import './AppsPage.css'
import '../App.css'

const AppsPage = ({ auth }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <div className='containerBox'>


                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://yeah-iptv.com/wp-content/uploads/2023/01/ss-iptv.png)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>SSIPTV</p>
                        <button className="buttona">
                            <span className="texta">Instalação</span>
                            <svg className="arrowa" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://i.imgur.com/QjKxuNM.jpg)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Smart Player</p>
                        <button className="buttona">
                            <span className="texta">Instalação</span>
                            <svg className="arrowa" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://play-lh.googleusercontent.com/JU0jhJafVvKO4gvJIS1jvgxmNlmwkuXTavnnjN7H3uUOKWnHYV1bZnUZc9BC76nvoQ=w526-h296-rw)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>xciptv player</p>

                        <button className="buttona">
                            <span className="texta">Instalação</span>
                            <svg className="arrowa" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>

                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://image.winudf.com/v2/image1/Y29tLmFhYi5wcmVtaXVtY2Rfc2NyZWVuXzBfMTY0OTgxNTc4NF8wNzc/screen-0.webp?fakeurl=1&type=.webp)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Clouddy</p>
                        <button className="buttona">
                            <span className="texta">Instalação</span>
                            <svg className="arrowa" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>


                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://i.imgur.com/WorED5Y.pngg)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Web Cast Video</p>
                        <button className="buttona">
                            <span className="texta">Instalação</span>
                            <svg className="arrowa" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>


                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://image.winudf.com/v2/image1/Y29tLnhjc21hcnR0dmNsdWIucGxheXRvcF9zY3JlZW5fM18xNjc3NDQ4MzEyXzAzMg/screen-3.webp?fakeurl=1&type=.webp)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Smart Tv Clube</p>
                        <button className="buttona">
                            <span className="texta">Instalação</span>
                            <svg className="arrowa" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AppsPage
