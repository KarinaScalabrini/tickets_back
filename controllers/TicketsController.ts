import TicketRepository from '../repositories/TicketsRepository';
import { Request, Response } from 'express';

export default class TicketsController {
    static async createTicket(req: Request, res: Response) {
        try {
            const { title, description, observation, userId, state, id_department } = req.body;
            const ticketRepository = new TicketRepository();
            const ticket = await ticketRepository.createTicket({title, description, observation, userId,  state, id_department});
            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
    static async getAll(req: Request, res: Response) {
        try {
            const { userId } = req.params;
            const ticketRepository = new TicketRepository();
            const tickets = await ticketRepository.findAll({userId});
            res.status(200).json(tickets);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }   
    static async updateTicket(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { title, description, observation, id_state, id_department, id_user} = req.body;
            const ticketRepository = new TicketRepository();
            const ticket = await ticketRepository.updateTicket({
                id, 
                title, 
                description, 
                observation,
                id_state, 
                id_department,
                id_user
            });
            res.status(200).json(ticket);
        } catch (error) {
            console.error('Error updating ticket:', error);
            res.status(500).json({ message: error });
        }
    }
    static async getTicket(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const ticketRepository = new TicketRepository();
            const ticket = await ticketRepository.findTicket({id});
            res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json({ message: error });
        }
    }
}