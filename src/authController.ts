import { User } from './database';
import bcrypt from 'bcryptjs';  // Se você for usar o bcrypt
import { Request, Response } from 'express';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }

    // Verifica se a senha fornecida corresponde à armazenada no banco
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Senha inválida' });
      return;
    }

    // Retorna resposta com sucesso e informações do usuário
    res.json({ message: 'Login bem-sucedido', user });
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};