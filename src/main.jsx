import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import cadastro from './pages/cadastro'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <cadastro />
  </StrictMode>,
)
