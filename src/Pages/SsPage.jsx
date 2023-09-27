// SsPage.js

import React, { useState } from 'react';
import Menu from '../assets/Menu';
import '../App.css'


function SsPage({ auth }) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className='app'>
            <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
            <h1>Página SS</h1>
            <p>Conteúdo da página SS.</p>
        </div>
    );
}

export default SsPage;
