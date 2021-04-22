import { io } from "../http"
import { ConnectionsService } from "../services/ConnectionsService"
import { MessagesService } from "../services/MessagesService"
import { UsersService } from "../services/UsersService"

interface IParams {
  email: string
  text: string
}

io.on('connect', socket => {
  const connectionsService = new ConnectionsService()
  const usersService = new UsersService()
  const messagesService = new MessagesService()

  socket.on('client_first_access', async params => {
    const socket_id = socket.id
    const { text, email } = params as IParams
    let user_id = null

    const userExists = await usersService.create({
      email
    })

    user_id = userExists.id

    const findConnection = await connectionsService.findByUserId({
      user_id
    })

    if(!findConnection) {
      await connectionsService.create({
        socket_id,
        user_id
      })
    } else {
      findConnection.socket_id = socket_id
      await connectionsService.create(findConnection)
    }

    await messagesService.create({
      user_id,
      text
    })
  })
})