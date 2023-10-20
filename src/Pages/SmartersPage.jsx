import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css'


function IPTVSmartersGuide({ auth }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <div className="instruction-container">
                <h1>Primeiro Acesso ao IPTV Smarters</h1>




                <div className="instruction-step">
                    <h2>Passo 1: Baixe o aplicativo</h2>


                    <p>Você pode baixar o IPTV Smarters da loja de aplicativos do seu dispositivo.</p>
                    <img src="https://i.imgur.com/A6qwc90.png" alt="Imagem de Instalação do Aplicativo" width="100" />
                </div>

                <div className="instruction-step">
                    <h2>Passo 2: Abra o aplicativo</h2>


                    <p>Depois de instalar, abra o aplicativo IPTV Smarters em seu dispositivo.</p>
                    <img src="https://i.imgur.com/jYMKlT9.png" alt="Imagem de Instalação do Aplicativo" width="300" />
                </div>
                <div className="instruction-step">
                    <h2>Passo 3: Insira suas credenciais</h2>



                    <p>Copie suas credenciais (imagem 1) e cole nos campos indicados (imagem 2).</p>
                    Imagem 1:
                    <br />
                    <img src="https://i.imgur.com/EkqF4Zj.png" alt="Imagem de Instalação do Aplicativo" width="250" />
                    <br />
                    Imagem 2:
                    <br />
                    <img src="https://i.imgur.com/5PlbOtu.png" alt="Imagem de Instalação do Aplicativo" width="300" />

                </div>
                <div className="instruction-step">
                    <h2>Passo 4: Comece a assistir</h2>



                    <p>Depois de fazer login, você pode começar a assistir seu conteúdo favorito.</p>

                </div>


            </div>
        </div >
    );
};

export default IPTVSmartersGuide;
