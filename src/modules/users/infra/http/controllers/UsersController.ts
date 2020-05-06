import CreateUserService from '@modules/users/services/CreateUserService';
import { container } from 'tsyringe';
import { Request, Response } from 'express';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}
