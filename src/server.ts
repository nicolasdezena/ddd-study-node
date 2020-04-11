import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './Config/routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database (): void {
    mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/catalog`, { useNewUrlParser: true })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

new App().express.listen(3333)
