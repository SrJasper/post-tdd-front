// src/hooks/usePosts.ts
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { api } from '../config/api';

interface Post {
  id: number;
  user: string;
  title: string;
  content: string;
}

const usePosts = () => {
  const [list, setList] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const refreshFeed = () => {
    setLoading(true);
    api.get('/posts')
      .then(response => {
        setList(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('error');
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshFeed();
  }, []);

  const createPost = (user: string, title: string, content: string) => {
    const data = { user, title, content };
    api.post('/posts', data)
      .then(() => {
        refreshFeed();
      })
      .catch(() => {
        setError('Erro ao criar post');
      });
  };

  return { list, refreshFeed, createPost, loading, error };
};

export default usePosts;
