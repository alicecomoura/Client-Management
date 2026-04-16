import './App.css'
import { ClientsList } from './components/ClientsList'

export const AppClientsManager = () => {
  return (
    <>
      <header className='header'>
        <h1>Clients Manager</h1>
        <div className='actions-container'>
          <button>Portfolio</button>
          <button>Add Client</button>
        </div>
      </header>
      <main className='clients-list-container'>
        <ClientsList />
      </main>
    </>
  )
}