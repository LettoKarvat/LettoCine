import React, { useState } from 'react';
import Menu from '../assets/Menu';
import './AppsPage.css'

const AppsPage = ({ auth }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <div className='containerBox'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(https://i.imgur.com/QjKxuNM.jpg)` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>Smart Player</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>

            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(https://play-lh.googleusercontent.com/JU0jhJafVvKO4gvJIS1jvgxmNlmwkuXTavnnjN7H3uUOKWnHYV1bZnUZc9BC76nvoQ=w526-h296-rw)` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>xciptv player</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>


            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(https://listaiptv.gratis/wp-content/uploads/2021/10/lista1.jpeg)` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>SSIPTV</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>


            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(https://play-lh.googleusercontent.com/-lAJpJA2N3pisq42cQKgh4Ip7VBqMhiSi4wmwESP7AgmAkM0SeUm77yrYQw8eP505A=w526-h296-rw)` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>Clouddy</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>


            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(https://i.imgur.com/WorED5Y.pngg)` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>Web Cast Video</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>


            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(https://smarttvclube.com/wp-content/uploads/2023/01/Canais-IPTV-smart-tv-club_4-1024x576.png)` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>Smart Tv Clube</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>
        </div>
    )
}


export default AppsPage
