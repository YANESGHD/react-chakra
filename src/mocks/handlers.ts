import { rest } from 'msw';
import data from './lender.json';

export const handlers = [
  // Handles a GET /lender/:lenderId request
  rest.get('/api/v1/lender/:lenderId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.lender));
  }),
];
