import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppClientsManager } from './AppClientsManager'
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppClientsManager />
  </StrictMode>,
)
