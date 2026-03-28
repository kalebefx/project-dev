import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import "./index.css";

function App() {
  const [cadastrado, setCadastrado] = useState(false)
  // false = mostra Cadastro, true = mostra Login

  return cadastrado ? (
    <Login />
  ) : (
    <Cadastro onCadastro={() => setCadastrado(true)} />
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);