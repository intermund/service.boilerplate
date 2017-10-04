import dotenv from 'dotenv'
import Service from './server/server'

const config = dotenv.config({ path: 'config/env/.env' }).parsed

export default new Service(config).listen(config.SERVICE_PORT)
