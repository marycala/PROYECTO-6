const mongoose = require('mongoose')

const fabricanteSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    imagen: { type: String, required: true },
    pais: { type: String },
    año_de_fundacion: { type: Number, required: true },
    modelos: [
      { type: mongoose.Types.ObjectId, ref: 'modelos', required: false }
    ]
  },
  {
    timestamps: true,
    collection: 'fabricantes'
  }
)

const Fabricante = mongoose.model(
  'fabricantes',
  fabricanteSchema,
  'fabricantes'
)

module.exports = Fabricante
