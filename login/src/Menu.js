// Import
import React from 'react';

// Componente
function Menu() {
  return (
    <div className="Menu">
      <h2>Menu</h2>
      <nav className="Menu_links">
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
    </div>
  );
}

// Exportar componente
export default Menu;