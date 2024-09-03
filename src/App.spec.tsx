import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import axios from 'axios';
import App from './App';

// Simula o módulo axios
vi.mock('axios');

describe('App Component', () => {
  it('should handle click and call axios', async () => {
    
    axios.get = vi.fn().mockResolvedValue({
      data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }],
    });

    
    const consoleLogSpy = vi.spyOn(console, 'log');

    
    render(<App />);

    
    const button = screen.getByText('Postar');
    await userEvent.click(button);

    
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/posts/list');

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'list', []);
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'list', [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);

    
    consoleLogSpy.mockRestore();
  });
});
