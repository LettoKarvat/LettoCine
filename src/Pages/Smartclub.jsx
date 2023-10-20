import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css';

const SmartTVClub = ({ auth }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />

            <div className="instruction-container">
                <h1>Como fazer o primeiro acesso no Smart TV Club</h1>
                <p>Seja bem-vindo ao guia de primeiro acesso ao Smart TV Club. Aqui estão os passos para você começar:</p>

                <div className="instruction-step">
                    <h2>Passo 1: Baixe o aplicativo</h2>
                    <p>Você pode baixar o aplicativo Smart TV Club na loja de aplicativos do seu dispositivo.</p>
                </div>

                <div className="instruction-step">
                    <h2>Passo 2: Abra o aplicativo</h2>
                    <p>Depois de baixar e instalar o aplicativo, abra-o no seu dispositivo.</p>
                </div>

                <div className="instruction-step">
                    <h2>Passo 3: Crie uma conta</h2>
                    <p>No menu principal, clique em "Criar Conta". Preencha os campos necessários, como nome de usuário, endereço de e-mail e senha. Clique em "Criar Conta" para finalizar o processo de criação da conta.</p>
                </div>

                <div className="instruction-step">
                    <h2>Passo 4: Faça login</h2>
                    <p>Depois de criar sua conta, volte para a tela inicial e clique em "Entrar". Insira suas credenciais e clique em "Entrar".</p>
                </div>

                <div className="instruction-step">
                    <h2>Passo 5: Carregue sua lista de reprodução</h2>
                    <p>No menu principal, clique em "Carregar Lista de Reprodução". Você pode carregar sua lista de reprodução inserindo a URL da lista de reprodução ou fazendo upload do arquivo da lista de reprodução do seu dispositivo. Depois de carregar sua lista de reprodução, clique em "Salvar".</p>
                </div>

                <div className="instruction-step">
                    <h2>Passo 6: Comece a assistir</h2>
                    <p>Agora você pode começar a assistir ao seu conteúdo favorito no Smart TV Club.</p>
                </div>

                <p>Esperamos que você aproveite o Smart TV Club!</p>
            </div>
        </div>
    );
};

export default SmartTVClub;
