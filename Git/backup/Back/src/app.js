import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';

import './database';
import session from './config/session';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.session();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors({ origin: '*' }));
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  session() {
    this.server.use(session);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
