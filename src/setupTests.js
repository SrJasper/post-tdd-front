// src/setupTests.js
import { server } from './mocks/server';
import { rest } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// src/mocks/handlers.js
export const handlers = [
  rest.get('http://localhost:3000/posts', (req, res, ctx) => {
    return res(ctx.json([]));
  }),
];

// src/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
