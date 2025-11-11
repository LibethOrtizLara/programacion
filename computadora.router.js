import { Router } from 'express';
import {
  getALLComputadoras,
  getComputadoraById,
  postComputadora,
  putComputadora,
  deleteComputadora
} from '../controllers/computadoras.controller.js';

const computadoras = Router();

computadoras.get('/', getALLComputadoras);
computadoras.get('/:id', getComputadoraById);
computadoras.put('/:id', putComputadora);
computadoras.post('/', postComputadora);
computadoras.delete('/:id', deleteComputadora);

export default computadoras;
