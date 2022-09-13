// src/server/router/index.ts
import {createRouter} from './context';
import superjson from 'superjson';

import {exampleRouter} from './example';
import {serviceRouter} from './service';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('service.', serviceRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
