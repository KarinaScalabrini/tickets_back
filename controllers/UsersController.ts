import { Request, Response } from 'express';

import UserRepository from '../repositories/UsersRepository';

export default class UsersController {
    public static async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const { name, password, id_department,  } = req.body;
            const user = await UserRepository.updateUser(Number(id), name, id_department, password ? password : undefined);
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}