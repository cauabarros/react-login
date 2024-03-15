import React from "react";

const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <form>
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" />
      </label>
      <br />
      <button type="submit">Entrar</button>
    </form>
  </div>
);

export default LoginPage;