import express, { Request, Response } from 'express';
import {login} from './authController';

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.post('/login', login);

const PORT = 8181;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
