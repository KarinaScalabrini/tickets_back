import { Ticket } from '../models/Ticket';
import { Department } from '../models/Department';
import { State } from '../models/State';

export default class TicketsRepository {
  public async createTicket({
    title,
    description,
    observation,
    userId,
    state,
    id_department
  }: {
    title: string;
    description: string;
    observation: string;
    userId: number;
    state: number;
    id_department: number;
  }): Promise<Ticket> {
    const ticket = await Ticket.create({
      title: String(title),
      description: String(description),
      created_by: Number(userId),
      updated_by: Number(userId),
      id_state: Number(state),
      observacao: String(observation),
      id_department: Number(id_department)
    });

    return ticket;
  }

  public async findAll(
    { userId }: { userId: number }
  ): Promise<Ticket[]> {
    const tickets = await Ticket.findAll({
        where: { created_by: userId },
        include: [
            {
            model: Department,
            as: 'department',
            attributes: ['title']
            },
            {
            model: State,
            as: 'state',
            attributes: ['title']
            }
        ]
    });

    return tickets;
  }

  public async findTicket({ id }: { id: number }): Promise<Ticket | null> {
    const ticket = await Ticket.findByPk(id, {
        include: [
            {
                model: Department,
                as: 'department',
                attributes: ['title']
            },
            {
                model: State,
                as: 'state',
                attributes: ['title']
            }
        ]
    });

        return ticket;
    }
    
    public async updateTicket({
        id,
        title,
        description, 
        observation, 
        id_state, 
        id_department,
        id_user
    }: {
        id: number;
        title: string;
        description: string;
        observation: string;
        id_state: number;
        id_department: number;
        id_user: number;
    }): Promise<Ticket | null> {
        const ticket = await Ticket.findByPk(id);
        if (!ticket) {
            return null;
        }
        ticket.title = title;
        ticket.description = description;
        ticket.observacao = observation;
        ticket.updated_by = id_user;
        ticket.id_state = id_state;
        ticket.id_department = id_department;
        await ticket.save();

        return ticket;
    }
    public async findAllTickets(): Promise<Ticket[]> {
        const tickets = await Ticket.findAll({
            include: [
                {
                    model: Department,
                    as: 'department',
                    attributes: ['title']
                },
                {
                    model: State,
                    as: 'state',
                    attributes: ['title']
                }
            ]
        });

        return tickets;
    }

}