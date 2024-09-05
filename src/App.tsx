import { useState } from 'react';
import './App.css';
import PostCard from './components/postCard/postCard';
import usePosts from './hooks/usePosts';

function App() {
  const { list, refreshFeed, createPost } = usePosts();
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    if(!user){
      alert('User is required');
      return console.log('User is required');
    }
    createPost(user, title, content);
  };

  return (
    <div className='page'>
      <div className="header">
        <h1>Posts</h1>
      </div>

      <div className="create-post-container">
        <input 
          type="text" 
          placeholder='User' 
          data-testid="user" 
          onChange={(event) => setUser(event.target.value)} 
        />
        <input 
          type="text" 
          placeholder='Title' 
          data-testid="title" 
          onChange={(event) => setTitle(event.target.value)} 
        />
        <textarea 
          placeholder='Content' 
          data-testid="content" 
          onChange={(event) => setContent(event.target.value)} 
        />
        <button data-testid="submit-button" onClick={handleClick}>Postar</button>
      </div>
      
      <div className="post-list">
        {list.slice().reverse().map((post) => (
          <PostCard
            key={post.id} 
            handleClose={refreshFeed}
            id={post.id}
            user={post.user} 
            title={post.title} 
            content={post.content} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
