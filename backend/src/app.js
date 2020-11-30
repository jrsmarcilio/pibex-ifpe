import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';

import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      '/tmp',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(cookieParser());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
