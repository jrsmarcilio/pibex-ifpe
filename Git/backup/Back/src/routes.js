import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import SegundaChamadaController from './app/controllers/SegundaChamadaController';
import AbonoFaltaController from './app/controllers/AbonoFaltaController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); //Rotas abaixo necessitam de autenticação

routes.put('/users', UserController.update);

routes.post('/segchama', upload.single('file'), SegundaChamadaController.store);
routes.get('/segchama', SegundaChamadaController.index);

routes.post('/abonofalta', upload.single('file'), AbonoFaltaController.store);
routes.get('/abonofalta', AbonoFaltaController.index);

export default routes;
