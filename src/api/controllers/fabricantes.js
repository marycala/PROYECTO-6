const Fabricante = require('../models/fabricantes')

const getFabricantes = async (req, res, next) => {
  try {
    const fabricantes = await Fabricante.find().populate('modelos')
    return res.status(200).json(fabricantes)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getFabricanteByYear = async (req, res, next) => {
  try {
    const { año } = req.params
    const fabricantes = await Fabricante.find({ año }).populate('modelos')
    return res.status(200).json(fabricantes)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getFabricanteByCountry = async (req, res, next) => {
  try {
    const { pais } = req.params
    const fabricantes = await Fabricante.find({ pais }).populate('modelos')
    return res.status(200).json(fabricantes)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const getFabricanteById = async (req, res, next) => {
  try {
    const { id } = req.params
    const fabricante = await Fabricante.findById(id).populate('modelos')
    return res.status(200).json(fabricante)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}
const postFabricante = async (req, res, next) => {
  try {
    const newFabricante = new Fabricante(req.body)

    const fabricanteDuplicated = await Fabricante.findOne({
      nombre: req.body.nombre
    })

    if (fabricanteDuplicated) {
      return res.status(400).json('Ese fabricante ya existe')
    }

    const fabricanteSaved = await newFabricante.save()
    return res.status(201).json(fabricanteSaved)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const putFabricante = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldFabricante = await Fabricante.findById(id)

    if (!oldFabricante) {
      return res.status(404).json('Fabricante no encontrado')
    }

    const oldModelosSet = new Set(
      oldFabricante.modelos.map((modelo) => modelo.toString())
    )
    const newModelosSet = new Set(
      req.body.modelos.map((modelo) => modelo.toString())
    )

    for (let newModelo of newModelosSet) {
      if (oldModelosSet.has(newModelo)) {
        return res.status(400).json(`Ese modelo ya existe: ${newModelo}`)
      }
    }

    const combinedModelosSet = new Set([
      ...oldFabricante.modelos.map((modelo) => modelo.toString()),
      ...req.body.modelos.map((modelo) => modelo.toString())
    ])

    const combinedModelosArray = Array.from(combinedModelosSet)

    const fabricanteUpdated = await Fabricante.findByIdAndUpdate(
      id,
      { modelos: combinedModelosArray },
      { new: true }
    )

    return res.status(200).json(fabricanteUpdated)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

const deleteFabricante = async (req, res, next) => {
  try {
    const { id } = req.params
    const fabricanteDeleted = await Fabricante.findByIdAndDelete(id)
    return res.status(200).json(fabricanteDeleted)
  } catch (error) {
    return res.status(400).json('Error en la solicitud')
  }
}

module.exports = {
  getFabricantes,
  getFabricanteByYear,
  getFabricanteByCountry,
  getFabricanteById,
  postFabricante,
  putFabricante,
  deleteFabricante
}
