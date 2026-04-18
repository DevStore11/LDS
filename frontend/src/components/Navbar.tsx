import { useState } from "react";
//@ts-ignore
import "../styles/Navbar.css";

export const Navbar: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);
  const [dropdownAberto, setDropdownAberto] = useState<boolean>(false);

  function alternarMenu(): void {
    setMenuAberto(!menuAberto);
  }

  function alternarDropdown(): void {
    setDropdownAberto(!dropdownAberto);
  }

  return (
    <header className="cabecalho">
      <div className="logo">Biblioteca Digital</div>

      <nav className={`menu ${menuAberto ? "ativo" : ""}`}>
        <a href="#" className="itemMenu">Início</a>
        <a href="#" className="itemMenu">Livros</a>

        <div className="dropdown">
          <button className="botaoDropdown" onClick={alternarDropdown}>
            Categorias ▼
          </button>

          {dropdownAberto && (
            <div className="conteudoDropdown">
              <a href="#">Programação</a>
              <a href="#">História</a>
              <a href="#">Ciência</a>
              <a href="#">Negócios</a>
            </div>
          )}
        </div>

        <a href="#" className="itemMenu">Favoritos</a>
        <a href="#" className="itemMenu">Perfil</a>
      </nav>

      <button className="botaoMobile" onClick={alternarMenu}>
        ☰
      </button>
    </header>
  );
}