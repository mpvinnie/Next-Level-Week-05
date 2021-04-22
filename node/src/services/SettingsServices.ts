import { getCustomRepository, Repository } from "typeorm"
import { Setting } from "../entities/Setting"
import { SettingsRepository } from "../repositories/SettingsRepository"

interface ICreateSettingsDTO {
  chat: boolean
  username: string
}

interface IFindByUsernameDTO {
  username: string
}

interface IUpdateSettingsDTO {
  chat: boolean
  username: string
}

export class SettingsService {
  private repository: Repository<Setting>

  constructor() {
    this.repository = getCustomRepository(SettingsRepository)
  }

  async create({ chat, username}: ICreateSettingsDTO) {

    const userAlreadyExists = await this.repository.findOne({ username })

    if(userAlreadyExists) {
      throw new Error('User already exists')
    }

    const settings = this.repository.create({
      chat,
      username
    })

    await this.repository.save(settings)

    return settings
  }

  async findByUsername({ username }: IFindByUsernameDTO) {
    const settings = await this.repository.findOne({ username })
    return settings
  }

  async update({ username, chat}: IUpdateSettingsDTO) {
    const settings = await this.repository.createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute()
  }
}