// Importado somente o Router do express, ao invés do Express inteiro
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello Gabriel' });
});

export default routes;
