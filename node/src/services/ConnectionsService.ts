import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface ICreateConnectionDTO {
  socket_id: string
  user_id: string
  admin_id?: string
  id?: string
}

interface IFindByUserIdDTO {
  user_id: string
}

export class ConnectionsService {
  private repository: Repository<Connection>

  constructor() {
    this.repository = getCustomRepository(ConnectionsRepository)
  }

  async create({socket_id, user_id, admin_id, id}: ICreateConnectionDTO) {
    const connection = this.repository.create({
      socket_id,
      user_id,
      admin_id,
      id
    })

    await this.repository.save(connection)

    return connection
  }

  async findByUserId({ user_id }: IFindByUserIdDTO) {
    const connection = this.repository.findOne({
      user_id
    })

    return connection
  }

  async findAllWithoutAdmin() {
    const connections = await this.repository.find({
      where: { admin_id: null },
      relations: ['user']
    })

    return connections
  }

  async findBySocketID(socket_id: string) {
    const connection = await this.repository.findOne({
      socket_id,
    });

    return connection;
  }

  async updateAdminID(user_id: string, admin_id: string) {
    await this.repository
      .createQueryBuilder()
      .update(Connection)
      .set({ admin_id })
      .where("user_id = :user_id", {
        user_id,
      })
      .execute();
  }
}