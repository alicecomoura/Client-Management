import './App.css'
import ClientsList from './components/ClientsList'

  function App() {
    return (
      <>
        <header className='header'>
          <h1>Client Manager</h1>
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
import ClientsTable from './components/ClientsList'

export default App