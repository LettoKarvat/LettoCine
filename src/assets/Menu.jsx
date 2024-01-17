import React from 'react';
import { Link } from 'react-router-dom';
import "./Menu.css";

function Menu({ isMenuVisible, setIsMenuVisible, auth }) {
  const toggleMenu = () => setIsMenuVisible(!isMenuVisible);
  const isOpen = isMenuVisible ? "open" : "";

  // Supondo que você tenha as rotas '/aplicativos', '/usuarios', '/services' e '/contact' definidas no seu Router
  const links = [
    { name: "Aplicativos", path: "/applications" },
    { name: "Usuários", path: "/" },
    { name: "Suporte", path: "https://wa.me/47996601626" },
    { name: "Seja um revendedor", path: "https://api.whatsapp.com/send?phone=5547996601626&text=Ol%C3%A1,%20gostaria%20de%20conhecer%20as%20vantagens%20de%20ser%20um%20revendedor%20LettoCine!%20" },

  ];

  return (
    <>
      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>

      <div className={`menu ${isOpen}`}>
        {isMenuVisible && (
          <nav>
            {links.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={isMenuVisible ? "appear" : ""}
                style={{ animationDelay: `0.${index + 1}s` }}
                onClick={toggleMenu} // Isso fechará o menu ao clicar em um link, se desejado
              >
                {link.name}

              </Link>

            ))}
            <a

              className={isMenuVisible ? "appear" : ""}
              style={{ animationDelay: `0.3s` }}
              onClick={auth.logout}>

              Sair
            </a>
          </nav>
        )}
      </div>
    </>
  );
}

export default Menu;
