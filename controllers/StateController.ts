import { Request, Response } from 'express';
import StateRepository from '../repositories/StateRepository';

export default class StateController {
    static async getAll(req: Request, res: Response) {
        try {
            const stateRepository = new StateRepository();
            const states = await stateRepository.findAll();
            res.status(200).json(states);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }   
}