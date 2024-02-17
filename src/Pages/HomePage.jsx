import React, { useState, useEffect } from 'react';
import Menu from '../assets/Menu';
import UsersName from './UsersName';
import './HomePage.css'
import '../Loading.css'


function Home({ auth, fetchTestData, loadingTest }) {
  const [totalUsers, setTotalUsers] = useState(0);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [creatingTest, setCreatingTest] = useState(false); // novo estado para controlar se o teste está sendo criado ou não
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  useEffect(() => {
    if (!loadingTest) {
      setCreatingTest(false);  // reativar o botão quando o teste for criado
    }
  }, [loadingTest]);

  const handleCreateTest = () => {
    setCreatingTest(true); // desativar o botão ao iniciar a criação do teste
    fetchTestData();
  };
  const bodyEl = document.querySelector(".body")
  return (

    <div>

      <Menu isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible} auth={auth} />
      <div id="page">

        <div id="container">
          <div className="loader">
            <br />

            <img src='https://i.imgur.com/d9H6sGg.jpg' alt='logo' width="150" style={{ borderRadius: '50%' }} />


          </div>
        </div>
      </div>



      <UsersName token={auth.user.token} setTotalUsers={setTotalUsers} setLoadingUsers={setLoadingUsers} />
      {!loadingUsers && totalUsers < 3 && <button className="btn" disabled={creatingTest} onClick={handleCreateTest}>

        {loadingTest ? <div className="texto-btn">
          Criando
          <br />
          Teste
        </div>
          :
          <div className="texto-btn">
            Criar
            <br />
            Teste
          </div>
        }
        <div id="clip">
          <div id="leftTop" className="corner"></div>
          <div id="rightBottom" className="corner"></div>
          <div id="rightTop" className="corner"></div>
          <div id="leftBottom" className="corner"></div>
        </div>
        <span id="rightArrow" className="arrow"></span>
        <span id="leftArrow" className="arrow"></span>
      </button>
      }



      {loadingTest && <div className="loaderr">
        <p>Adicionando</p>
        <div className="words">
          <span className="word">Usuario</span>

          <span className="word">Series</span>
          <span className="word">Canais</span>
          <span className="word">Novelas</span>
          <span className="word">Esportes</span>
          <span className="word">Filmes</span>
          <span className="word">Desenhos</span>
          <span className="word">Canais 24H</span>

        </div>
      </div>}
    </div>
  );


}

export default Home;