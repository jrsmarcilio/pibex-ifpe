import express from 'express';
import session from 'express-session';
import Sequelize from 'sequelize';

import authConfig from './auth';

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const db = new Sequelize('pibex', 'root', '34544615', {
  dialect: 'mysql',
});

module.exports = session({
  store: new SequelizeStore({
    db: db,
    checkExpirationInterval: 16 * 60 * 1000,
    expiration: 7 * 24 * 60 * 60 * 1000,
  }),
  secret: authConfig.secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000,
  },
});

const app = express();

const myStore = new SequelizeStore({
  db: db,
});
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: authConfig.secret,
    proxy: true,
  })
);

myStore.sync();
