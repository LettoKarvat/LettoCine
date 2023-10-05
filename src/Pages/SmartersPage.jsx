import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css'


function IPTVSmartersGuide({ auth }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />

            <h1>Primeiro Acesso ao IPTV Smarters</h1>
            <p>O IPTV Smarters é um aplicativo que permite transmitir conteúdo de TV ao vivo, VOD, Séries e TV Catchup em seus dispositivos.</p>

            <h2>Passo 1: Baixe o aplicativo</h2>
            <p>Você pode baixar o IPTV Smarters da loja de aplicativos do seu dispositivo.</p>

            <h2>Passo 2: Abra o aplicativo</h2>
            <p>Depois de instalar, abra o aplicativo IPTV Smarters em seu dispositivo.</p>

            <h2>Passo 3: Insira suas credenciais</h2>
            <p>Você precisará inserir suas credenciais de login fornecidas pelo seu provedor de IPTV.</p>

            <h2>Passo 4: Comece a assistir</h2>
            <p>Depois de fazer login, você pode começar a assistir seu conteúdo favorito.</p>

            <p>Por favor, note que nenhum canal está incluído no aplicativo. Os desenvolvedores do aplicativo não são responsáveis pelo conteúdo carregado nele.</p>
        </div>
    );
};

export default IPTVSmartersGuide;
