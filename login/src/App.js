// Imports
import React from 'react';

// Componentes
import BarraSuperior from './BarraSuperior';
import Login from'./Login';
import Menu from './Menu';

// CSS
import './CSS/BarraSuperior.css';
import './CSS/Menu.css';
import './CSS/Main.css';

// Função principal
function App() {
  return (
    <>
      <BarraSuperior />
      <Menu />
      <main className="main">
        <Login></Login>
      </main>
    </>
  );
}

export default App;