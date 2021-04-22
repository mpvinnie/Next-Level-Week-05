import { getCustomRepository, Repository } from "typeorm";
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface ICreateMessageDTO {
  admin_id?: string
  user_id: string
  text: string
}

interface IListByUserDTO {
  user_id: string
}

export class MessagesService {
  private repository: Repository<Message>

  constructor() {
    this.repository = getCustomRepository(MessagesRepository)
  }

  async create({ admin_id, user_id, text }: ICreateMessageDTO) {
  
    const message = this.repository.create({
      admin_id,
      user_id,
      text
    })

    await this.repository.save(message)

    return message
  }

  async listByUser({ user_id }: IListByUserDTO) {
    const messages = await this.repository.find({
      where: { user_id },
      relations: ['user']
    })

    return messages
  }
}