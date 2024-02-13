// SsPage.js

import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css'


function SsPage({ auth }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <h1 >Configuração do SS IPTV</h1>

            <div className="instruction-container">


                <div className="instruction-step">
                    <h3>Passo 1: Instalação do Aplicativo</h3>
                    <p>Instale o aplicativo SS IPTV pela loja de aplicativos da sua Smart TV.</p>

                    {/* Adicionando a imagem */}
                    <img src="https://i.imgur.com/ZRcGn6g.jpg" alt="Imagem de Instalação do Aplicativo" width="100" />

                </div>



                <div className="instruction-step">
                    <h3>Passo 2: Acessar Configurações</h3>
                    <p>Se for seu primeiro acesso, primeiro aceite os termos de privacidade do aplicativo em "Agree"</p>
                    <img src="https://i.imgur.com/iXFmMBZ.png" alt="Imagem de Instalação do Aplicativo" width="400" />
                    <p> Clique em "Skip" para ir ao menu principal</p>
                    <img src="https://i.imgur.com/ZpjtI7h.png" alt="Imagem de Instalação do Aplicativo" width="400" />
                    <p>No menu principal, vá até a seção de Configurações clicando na engrenagem localizada no canto superior direito.</p>
                    <img src="https://i.imgur.com/ppxV8kN.png" alt="Imagem de Instalação do Aplicativo" width="400" />

                </div>




                <div className="instruction-step">
                    <h3>Passo 3: Obter Código da TV</h3>
                    <p>Na seção de Configuração, mude o idioma para portugues ou de sua preferencia, e em seguida clique para obter o código da TV.</p>
                    <img src="https://i.imgur.com/dZaOM4m.png" alt="Imagem de Instalação do Aplicativo" width="500" />
                    <br />
                    <img src="https://i.imgur.com/oCvwPiw.png" alt="Imagem de Instalação do Aplicativo" width="250" />

                </div>

                <div className="instruction-step">
                    <h3>Passo 4: Acessar o Site do SS IPTV</h3>

                    <p>Acesse o <a href="https://ss-iptv.com/en/users/playlist" target="_blank" rel="noopener noreferrer">site oficial do SS IPTV</a> e insira o código fornecido pela TV.</p>
                    <p><a href="https://ss-iptv.com/en/users/playlist">https://ss-iptv.com/en/users/playlist</a> </p>

                </div>

                <div className="instruction-step">
                    <h3>Passo 5: Configurar Lista de Canais</h3>
                    <p>No site do SS IPTV, você terá a opção de adicionar listas de canais. Aqui estão os passos detalhados para adicionar uma lista de canais através da URL:</p>
                    <ol>
                        <li>Primeiramente adicione o código da sua TV”.
                            <br />
                            <br />
                            <img src="https://i.imgur.com/GOkljaZ.png" alt="Imagem de Instalação do Aplicativo" width="700" />
                        </li>
                        <li>Com o código da sua TV adicionado, vá ate o campo "External Playlist".
                            <br />
                            <br />
                            <img src="https://i.imgur.com/eamFAke.png" alt="Imagem de Instalação do Aplicativo" width="700" />
                        </li>
                        <li>Clique no botão ADD Item" ou equivalente.
                            <br />
                            <br />
                            <img src="https://i.imgur.com/wmlirGV.png" alt="Imagem de Instalação do Aplicativo" width="700" />
                        </li>
                        <li>Adicione um nome, exemplo "LettoCine" e no campo "Source", insira o link SSIPTV do seu usuário.
                            <br />
                            <br />
                            <img className="imge" src="https://i.imgur.com/S7gKViN.png" alt="Imagem de Instalação do Aplicativo" width="300" style={{ marginRight: '20px' }} />
                            <img className="imge" src="https://i.imgur.com/oBY722Q.png" alt="Imagem de Instalação do Aplicativo" width="400" />


                        </li>

                        <li>Salve as configurações antes de sair.
                            <br />
                            <br />
                            <img src="https://i.imgur.com/TdsHP2H.png" alt="Imagem de Instalação do Aplicativo" width="700" />
                        </li>
                    </ol>
                    <p>Depois de salvar, a lista de canais deverá estar disponível no aplicativo SS IPTV na sua TV, clique no icone de atualizar para aparecer a lista.</p>
                    <img src="https://i.imgur.com/jWhVOjX.png" alt="Imagem de Instalação do Aplicativo" width="500" />
                </div>

                <br />
                <br /><br />
            </div>
        </div >
    );
}

export default SsPage;
