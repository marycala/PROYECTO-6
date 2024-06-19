const Modelo = require('../models/modelos')

const getModelos = async (req, res, next) => {
  try {
    const modelos = await Modelo.find()
    return res.status(200).json(modelos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getModeloByCv = async (req, res, next) => {
  try {
    const { cv } = req.params
    const modelos = await Modelo.find({ cv })
    return res.status(200).json(modelos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getModeloByYear = async (req, res, next) => {
  try {
    const { año } = req.params
    const modelos = await Modelo.find({ año })
    return res.status(200).json(modelos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getModeloByPrice = async (req, res, next) => {
  try {
    const { precio } = req.params
    const modelos = await Modelo.find({ precio: { $lte: precio } })
    return res.status(200).json(modelos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getModeloByModel = async (req, res, next) => {
  try {
    const { modelo } = req.params
    const modelos = await Modelo.find({ modelo })
    return res.status(200).json(modelos)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getModeloById = async (req, res, next) => {
  try {
    const { id } = req.params
    const modelo = await Modelo.findById(id)
    return res.status(200).json(modelo)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}
const postModelo = async (req, res, next) => {
  try {
    const newModelo = new Modelo(req.body)

    const modeloDuplicated = await Modelo.findOne({ modelo: req.body.modelo })

    if (modeloDuplicated) {
      return res.status(400).json('Ese modelo de vehículo ya existe')
    }

    const modeloSaved = await newModelo.save()
    return res.status(201).json(modeloSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putModelo = async (req, res, next) => {
  try {
    const { id } = req.params
    const newModelo = new Modelo(req.body)
    newModelo._id = id
    const modeloUpdated = await Modelo.findByIdAndUpdate(id, newModelo, {
      new: true
    })
    return res.status(200).json(modeloUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteModelo = async (req, res, next) => {
  try {
    const { id } = req.params
    const modeloDeleted = await Modelo.findByIdAndDelete(id)
    return res.status(200).json(modeloDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getModelos,
  getModeloByCv,
  getModeloByYear,
  getModeloByPrice,
  getModeloByModel,
  getModeloById,
  postModelo,
  putModelo,
  deleteModelo
}
