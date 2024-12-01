import express, { Request, Response } from 'express';
import { sequelize } from './database';
import { login } from './authController';
import DepartmentController from '../controllers/DepartmentsController';
import UsersController from '../controllers/UsersController';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
        console.log(`Servidor rodando na porta ${PORT}`);
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
});

app.post('/login', login);
app.get('/departments', (req: Request, res: Response) => {
    DepartmentController.getAll(req, res);

});
app.put('/users/:id', (req: Request, res: Response) => {
    UsersController.updateUser(req, res);
});