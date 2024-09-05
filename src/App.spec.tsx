import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

const mockCreatePost = vi.fn();
const mockRefreshFeed = vi.fn();

vi.mock('./hooks/usePosts', () => ({
  __esModule: true,
  default: () => ({
    list: [
      { id: '1', user: 'User1', title: 'Title1', content: 'Content1' },
      { id: '2', user: 'User2', title: 'Title2', content: 'Content2' },
    ],
    refreshFeed: mockRefreshFeed,
    createPost: mockCreatePost,
  }),
}));

describe('App', () => {
  beforeEach(() => {
    mockCreatePost.mockClear();  // Limpa as chamadas anteriores
    mockRefreshFeed.mockClear();
  });

  it('should render components correctly', () => {
    render(<App />);
    
    expect(screen.getByPlaceholderText('User')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Content')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    
    // Check if PostCard components are rendered
    expect(screen.getByText('Title1')).toBeInTheDocument();
    expect(screen.getByText('Title2')).toBeInTheDocument();
  });

  it('should call createPost with correct arguments', () => {
    render(<App />);
    
    const userInput = screen.getByPlaceholderText('User');
    const titleInput = screen.getByPlaceholderText('Title');
    const contentInput = screen.getByPlaceholderText('Content');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(userInput, { target: { value: 'User3' } });
    fireEvent.change(titleInput, { target: { value: 'Title3' } });
    fireEvent.change(contentInput, { target: { value: 'Content3' } });
    fireEvent.click(submitButton);
    
    expect(mockCreatePost).toHaveBeenCalledWith('User3', 'Title3', 'Content3');
  });

  it('shouldnt does not call createPost if user is not provided', () => {
    render(<App />);
    
    const titleInput = screen.getByPlaceholderText('Title');
    const contentInput = screen.getByPlaceholderText('Content');
    const submitButton = screen.getByTestId('submit-button');
    
    fireEvent.change(titleInput, { target: { value: 'Title3' } });
    fireEvent.change(contentInput, { target: { value: 'Content3' } });
    fireEvent.click(submitButton);
    
    expect(mockCreatePost).not.toHaveBeenCalled();
  });
});
