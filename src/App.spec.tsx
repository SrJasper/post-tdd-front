import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should print "clicou" when the button is clicked', async () => {
    // const fetchSpy = vi.spyOn(global, 'fetch').mockResolvedValueOnce(new Response());

    // // Renderiza o componente
    // render(<App />);

    // // Busca o botão com o texto "Postar"
    // const button = await screen.findByRole('button', { name: 'Postar' });

    // // Simula o clique no botão
    // fireEvent.click(button);

    // // Verifica se fetch foi chamado
    // expect(fetchSpy).toHaveBeenCalled();

    // // Restaura a implementação original do fetch
    // fetchSpy.mockRestore();

    //Deve verificar se tá chamando a api
  });
});