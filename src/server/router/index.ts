// src/server/router/index.ts
import {createRouter} from './context';
import superjson from 'superjson';

import {exampleRouter} from './example';
import {serviceRouter} from './service';
import {reportRouter} from 'src/server/router/report';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('service.', serviceRouter)
  .merge('report.', reportRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
