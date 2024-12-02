import { State } from '../models/State';

export default class StatesRepository {

  public async findAll(): Promise<State[]> {
    const states = await State.findAll();

    return states;
  }
}