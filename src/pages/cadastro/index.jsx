import { useState } from 'react' // importando o useState, captura o valor do input
import './style.css'


function Cadastro({onCadastro}) {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    // Capturar os valores para enviar pro backend

    function handleCadastro(){
    const dados = { nome, email, senha }

    fetch('https://reachfy.com.br/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        onCadastro() // isso e pra tela de Login
    })
    .catch(error => {
        console.log('Erro no cadastro:', error)
    })
}


  return (
    <div className="container">
      <div className="form-box">
        <h1>Cadastro de Usuários</h1>
        <label htmlFor="name">Nome:</label>

        <input
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            // aqui estamos capturando o valor do input e atualizando o estado name
        />

        <label htmlFor="email">Email:</label>
        <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // aqui estamos capturando o valor do input e atualizando o estado email
        />

        <label htmlFor="senha">Senha:</label>
        <input
            id="senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            // aqui estamos capturando o valor do input e atualizando o estado password
        />

        <button type="button" onClick={handleCadastro}>
            Cadastrar
        </button>
      </div>
    </div>
  )
}
export default Cadastro