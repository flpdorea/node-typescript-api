import { SetupServer } from './server'

const server = new SetupServer()
server.init()
server.app.listen(3000, () => {console.log('Server is running!')})
