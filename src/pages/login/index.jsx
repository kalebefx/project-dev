import { useState } from 'react' // importando o useState, captura o valor do input
import './style.css'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // Capturar os valores para enviar pro backend

    function handleLogin(){
        const dados = {email, password }
        console.log(dados)
        // Lógica para enviar os dados para o backend
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
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // aqui estamos capturando o valor do input e atualizando o estado password
        />

          <button type="button" onClick={handleLogin}>
            Login
        </button>
      </div>
    </div>
  )
}
export default Login