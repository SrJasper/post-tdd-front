import React from 'react';
import './postCard.css';
import { api } from '../../config/api';

type Props = {
  handleClose: () => void;
  id: number;
  user: string;
  title: string;
  content: string;
}

const PostCard: React.FC<Props> = ({ handleClose, id, user, title, content }) => {

  const handleDelete = () => {
    api.delete(`/posts/${id}`)
    .then(() => {
      handleClose();
    });
  }

  return (
    <div className='post-card-div'>
      <div className="post-card">
        <div className='post-card-texts'>
          <h2 className='left-side'>{title}</h2>
          <p className='left-side'>{content}</p>
          <h3 className='right-side'>{user}</h3>
        </div>
      </div>
      <div className='post-card-button' onClick={handleDelete}>
        <img src="/images/trash-bin-icon.png" alt="Trash Bin Icon" />
      </div>
    </div>
  );
};

export default PostCard;