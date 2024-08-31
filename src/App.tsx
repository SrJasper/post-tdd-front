import './App.css'

function App() {

  const handleClick = () => {
    console.log('clicou')
  }

  return (
    <div className='page'>
      <div className="header">
        <h1>
          Posts
        </h1>
        <button>
          i
        </button>
      </div>

      <div className="create-post-container">
        <input type="text" placeholder='Usuário'/>
        <input type="text" placeholder='Titulo'/>
        <input type="text" placeholder='Mensagem'/>
        <button onClick={handleClick}> Postar </button>
      </div>
    </div>
  )
}

export default App
