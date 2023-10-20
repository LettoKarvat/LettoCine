import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css'

const Xcplayer = ({ auth }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <div className="instruction-container">
                <h1>Primeiro Acesso ao XCIPTV Player</h1>




                <div className="instruction-step">
                    <h2>Passo 1: Baixe o aplicativo</h2>


                    <p>Você pode baixar o IPTV Smarters da loja de aplicativos do seu dispositivo.</p>
                    <img src="https://i.imgur.com/5sQEosZ.jpg" alt="Imagem de Instalação do Aplicativo" width="350" />
                </div>


                <div className="instruction-step">
                    <h2>Passo 2: Abra o app e Insira suas credenciais</h2>



                    <p>Copie suas credenciais (imagem 1) e cole nos campos indicados (imagem 2).</p>
                    Imagem 1:
                    <br />
                    <img src="https://i.imgur.com/oIIJQvZ.png" alt="Imagem de Instalação do Aplicativo" width="250" />
                    <br />
                    Imagem 2:
                    <br />
                    <img src="https://i.imgur.com/fBon0ue.png" alt="Imagem de Instalação do Aplicativo" width="400" height="300" />

                </div>
                <div className="instruction-step">
                    <h2>Passo 3: Comece a assistir</h2>



                    <p>Depois de fazer login, você pode começar a assistir seu conteúdo favorito.</p>

                </div>


            </div>
        </div >
    );
};

export default Xcplayer