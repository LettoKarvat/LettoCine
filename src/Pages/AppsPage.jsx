import React, { useState } from 'react';
import Menu from '../assets/Menu';
import './AppsPage.css'

const AppsPage = ({ auth, imageUrl, appName, appLink }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <div className="app-box">
                <div className="app-box-top" style={{ backgroundImage: `url(${imageUrl})` }}>
                    {/* Deixe essa div vazia para apenas exibir a imagem */}
                </div>
                <div className="app-box-bottom">
                    <p>{appName}</p>
                    <button onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                </div>
            </div>
        </div>
    )
}


export default AppsPage
