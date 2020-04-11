import { Schema, model } from 'mongoose'

const CatalogConfigSchema = new Schema({
  userId: {
    type: Object,
    required: true
  },
  xmlUrl: {
    type: String,
    required: true
  },
  updateFrequency: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
})

export default model('Config', CatalogConfigSchema)
