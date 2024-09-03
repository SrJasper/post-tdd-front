import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [list, setList] = useState([]);

  const handleClick = () => {
    axios.get('http://localhost:3000/posts/list')
    .then(response => {
      setList (response.data);
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
  }

  useEffect(() => {
    console.log('list', list)
  }, [list])

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
