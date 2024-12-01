import { Request, Response } from 'express';
import DepartmentRepository from '../repositories/DepartmentsRepository';

export default class DepartmentsController {
    public static async getAll(req: Request, res: Response) {
        try {
            
            const departments = await DepartmentRepository.getAll();
            res.status(200).json(departments);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar departamentos' });
        }
    }
};