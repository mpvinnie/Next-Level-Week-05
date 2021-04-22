import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface ICreateMessageDTO {
  admin_id?: string
  user_id: string
  text: string
}

export class MessagesService {
  async create({ admin_id, user_id, text }: ICreateMessageDTO) {
    const messagesRepository = getCustomRepository(MessagesRepository)

    const message = messagesRepository.create({
      admin_id,
      user_id,
      text
    })

    await messagesRepository.save(message)

    return message
  }
}