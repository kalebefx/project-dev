import { useState } from 'react' // importando o useState, captura o valor do input
import './style.css'


function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    // Capturar os valores para enviar pro backend
    const [erro, setErro] = useState('')


    function handleLogin(){
    const dados = { email, senha }

    fetch('https://reachfy.com.br/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if(data.erro){
            setErro('Usuário não encontrado, tente novamente.')
        } else {
            console.log('Login ok!', data) //isso vai pra dps da tela de login
        }
    })
    .catch(error => {
        console.log('Erro no login:', error)
    })
}


  return (
    <div className="container">
      <div className="form-box">
        <h1>login de Usuários</h1>

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
            id="senha"
            name="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            // aqui estamos capturando o valor do input e atualizando o estado password
        />

          <button type="button" onClick={handleLogin}>
            Login
        </button>
      
        {erro && <p style={{ color: 'red', marginTop: '10px' }}>{erro}</p>}        
      </div>
    </div>
  )
}

export default Login