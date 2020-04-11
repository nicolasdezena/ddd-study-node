import { CatalogConfigInterface } from './CatalogConfigInterface'
import Model from './Model'
import Schema from 'validate'

export class CatalogConfig implements CatalogConfigInterface {
  /**
   * Create
   */
  public async Create (
    userId: string,
    xmlUrl: string,
    updateFrequency: number
  ) : Promise<object> {
    const isValid = new Schema(this.Rules()).validate({
      userId: userId,
      xmlUrl: xmlUrl,
      updateFrequency: updateFrequency
    })

    if (isValid) {
      return isValid
    }

    const create = await Model.create({
      userId,
      xmlUrl,
      updateFrequency
    })

    return create
  }

  public Rules (): Record<string, any> {
    return {
      userId: {
        type: String,
        required: true,
        message: {
          required: 'Id do usúario é obrigatório'
        }
      },
      xmlUrl: {
        type: String,
        required: true,
        message: {
          required: 'Url do xml é obrigatória'
        }
      },
      updateFrequency: {
        type: String,
        required: true,
        message: {
          required: 'Frequência de atualização é obrigatória'
        }
      }
    }
  }
}
