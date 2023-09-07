import React, { useState, useEffect } from 'react';
import UsersName from './UsersName';
import './HomePage.css'
import '../Loading.css'

function Home({ auth, fetchTestData, loadingTest }) {
  const [totalUsers, setTotalUsers] = useState(0);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [creatingTest, setCreatingTest] = useState(false); // novo estado para controlar se o teste está sendo criado ou não
  
  useEffect(() => {
    if (!loadingTest) {
      setCreatingTest(false);  // reativar o botão quando o teste for criado
    }
  }, [loadingTest]);

  const handleCreateTest = () => {
    setCreatingTest(true); // desativar o botão ao iniciar a criação do teste
    fetchTestData();
  };

  return (
    <div>
        <div id="page">
            <div id="container">
                <div className="loader">
                    <h1 className="loader-text">{auth.user.fullname}</h1>
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
        <UsersName token={auth.user.token} setTotalUsers={setTotalUsers} setLoadingUsers={setLoadingUsers}/>
        { !loadingUsers && totalUsers < 3 && <button className="btn" disabled={creatingTest} onClick={handleCreateTest}>Criar teste</button> }
        <button className="btn" onClick={auth.logout}>Sair</button>
        

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
