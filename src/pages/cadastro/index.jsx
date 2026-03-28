import { useState } from 'react' // importando o useState, captura o valor do input
import './style.css'


function Cadastro({onCadastro}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Capturar os valores para enviar pro backend

    function handleCadastro(){
    const dados = { name, email, password }

    fetch('URL_DO_RAFAEL/cadastro', {
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
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <label htmlFor="password">Senha:</label>
        <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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