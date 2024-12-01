import { User } from '../models/User';
const bcrypt = require('bcryptjs');

export default class UsersRepository {
    public static async updateUser(id: number, name: string, id_department: number, password?: string): Promise<User> {
        const user = await User.findByPk(id);
        if (!user) {
            throw new Error('User not found');
        }
        user.name = name;
        user.id_department = id_department;
        if (password) {
            const newPassword = await bcrypt.hash(password, 10);
            user.password = newPassword;
        }
        await user.save();
        return user;
    }
}