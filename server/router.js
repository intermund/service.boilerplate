import express from 'express'
const Users_router = express.Router();
import root_controller from './controllers/_root-route'
import open_lead from './controllers/_lead_open'

Users_router.get('/', root_controller)
Users_router.get('/open-lead', open_lead)

export default Users_router