// Importado somente o Router do express, ao invés do Express inteiro
import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Gabriel Resende',
    email: 'gabrielsrbts@gmail.com',
    password_hash: '731278531283',
  });
  return res.json(user);
});

export default routes;
