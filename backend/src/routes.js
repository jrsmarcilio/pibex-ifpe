import Router, { urlencoded } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import SegundaChamadaController from './app/controllers/SegundaChamadaController';

import RequerimentController from './app/controllers/RequerimentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); //Rotas abaixo necessitam de autenticação

routes.get('/2ndcall', SegundaChamadaController.index);
routes.get('/2call/:id', SegundaChamadaController.indexId);

routes.put('/2ndcall', SegundaChamadaController.update);
routes.put('/users', UserController.update);

routes.post('/2ndcall', upload.single('file'), RequerimentController.store);

export default routes;
