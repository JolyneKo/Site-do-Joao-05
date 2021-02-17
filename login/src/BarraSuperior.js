// Import
import React from 'react';
import logo from './Images/logo.png';
import Menu from './Menu';

// Componente
function BarraSuperior() {
  return (
    <header className="BarraSuperior">
      <img src={logo} alt="logo" />
      <nav className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      
      <div className="menu-icon" onClick={abrirMenu}>
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>
    </header>
  );
}

// Funções
function abrirMenu() {
  const menu = document.querySelector('.Menu');
  const icon = document.querySelector('.menu-icon');
  const LIs = document.querySelectorAll('.Menu_links li');
  
  if (!menu.classList.contains('Menu_aberto')) {
    menu.classList.add('Menu_aberto');
    icon.style.boxShadow = '0 0 10px 5px rgba(0, 0, 0, 0.3)';
    
    LIs.forEach((li, index) => {
      li.style.animation = `texto_abertura ${1 + index / 10}s forwards`;
    });
  } else {
    menu.classList.remove('Menu_aberto');
    icon.style.boxShadow = 'none';

    LIs.forEach(li => {
      li.style.animation = 'none';
    }); 
  }
}

// Exportar componente
export default BarraSuperior;
