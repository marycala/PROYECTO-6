const mongoose = require('mongoose')

const modeloSchema = new mongoose.Schema(
  {
    modelo: { type: String, required: true },
    cv: { type: Number, required: true },
    imagen: { type: String, required: true },
    año: { type: Number, required: true },
    precio: { type: Number, required: true },
    fabricante: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'modelos'
  }
)

const Modelo = mongoose.model('modelos', modeloSchema, 'modelos')

module.exports = Modelo
