import { CatalogConfig } from '../CatalogConfig/CatalogConfig'
import { Request, Response } from 'express'

class CatalogConfigController {
  private catalogConfig: CatalogConfig
  public constructor () {
    this.catalogConfig = new CatalogConfig()
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const {
      userId,
      xmlUrl,
      updateFrequency
    } = req.body

    return res.json(await this.catalogConfig.Create(
      userId,
      xmlUrl,
      updateFrequency
    ))
  }
}

export default new CatalogConfigController()
