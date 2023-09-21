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
                        <button className='buttonApp' onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                    </div>
                </div>

                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://i.imgur.com/QjKxuNM.jpg)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Smart Player</p>
                        <button className='buttonApp' onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                    </div>
                </div>

                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://play-lh.googleusercontent.com/JU0jhJafVvKO4gvJIS1jvgxmNlmwkuXTavnnjN7H3uUOKWnHYV1bZnUZc9BC76nvoQ=w526-h296-rw)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>xciptv player</p>

                        <button className='buttonApp' onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                    </div>
                </div>

                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://image.winudf.com/v2/image1/Y29tLmFhYi5wcmVtaXVtY2Rfc2NyZWVuXzBfMTY0OTgxNTc4NF8wNzc/screen-0.webp?fakeurl=1&type=.webp)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Clouddy</p>
                        <button className='buttonApp' onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                    </div>
                </div>


                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://i.imgur.com/WorED5Y.pngg)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Web Cast Video</p>
                        <button className='buttonApp' onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                    </div>
                </div>


                <div className="app-box">
                    <div className="app-box-top" style={{ backgroundImage: `url(https://image.winudf.com/v2/image1/Y29tLnhjc21hcnR0dmNsdWIucGxheXRvcF9zY3JlZW5fM18xNjc3NDQ4MzEyXzAzMg/screen-3.webp?fakeurl=1&type=.webp)` }}>
                        {/* Deixe essa div vazia para apenas exibir a imagem */}
                    </div>
                    <div className="app-box-bottom">
                        <br />
                        <p>Smart Tv Clube</p>
                        <button className='buttonApp' onClick={() => window.location.href = appLink}>Ir para o aplicativo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AppsPage
