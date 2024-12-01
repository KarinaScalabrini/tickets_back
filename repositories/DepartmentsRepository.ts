import { Department } from '../models/Department';

export default class DepartmentRepository {
    public static async getAll(): Promise<Department[]> {
        return Department.findAll();
    }
}