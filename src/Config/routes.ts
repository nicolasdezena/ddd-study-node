import { Router } from 'express'
import CatalogConfigController from '../App/CatalogConfigController'

const routes = Router()

routes.post('/config', CatalogConfigController.store)

export default routes
