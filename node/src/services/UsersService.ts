import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface ICreateUserDTO {
  email: string
}

export class UsersService {
  async create({ email }: ICreateUserDTO): Promise<User>{
    const usersRepository = getCustomRepository(UsersRepository)

    const userExists = await usersRepository.findOne({ email})

    if(userExists) {
      return userExists
    }

    const user = usersRepository.create({
      email
    })

    await usersRepository.save(user)

    return user
  }
}