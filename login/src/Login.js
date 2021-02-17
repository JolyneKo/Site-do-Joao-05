// Import
import React from 'react';

// Componente
function Login() {
  function loginClick(e) {
    //e.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const textError = document.querySelector('#textoError');

    if (validateEmail(email)) {

    } else {
      textError.style.display = 'block';
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return(
    <div className="container">
      <p id="textoError">Email inválido</p>

      <h2>Login</h2>

      <form>
        <label id="username">Username</label>
        <input id="username" name="user" type="text" placeholder="Nome do usuário" />

        <label id="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />

        <label id="password">Senha</label>
        <input id="password" name="password" type="password" placeholder="Senha" />

        <button onClick={loginClick}>Login</button>
      </form>
    </div>
  );
}

// Exportar componente
export default Login;

