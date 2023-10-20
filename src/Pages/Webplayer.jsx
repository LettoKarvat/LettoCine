import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css'

const WebPlayer = ({ auth }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <div className="instruction-container">
                <h1>Primeiro Acesso ao WebTV Player</h1>




                <div className="instruction-step">
                    <h2>Passo 1: Acesse o link da pagina</h2>

                    <p><a href="http://webplayer.hibrido.club/index.php">http://webplayer.hibrido.club/index.php</a> </p>
                </div>


                <div className="instruction-step">
                    <h2>Passo 2: Insira suas credenciais</h2>
                    <img src="https://i.imgur.com/uGMUstp.png" alt="Imagem de Instalação do Aplicativo" width="350" />
                    <p>Obs.: Em Any Name pode por "LettoCine"</p>
                </div>
                <div className="instruction-step">
                    <h2>Passo 3: Comece a assistir</h2>

                    <p>Depois de fazer login, você pode começar a assistir seu conteúdo favorito.</p>

                </div>


            </div>
        </div >
    );
};

export default WebPlayer