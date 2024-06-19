const {
  getFabricanteByYear,
  getFabricanteByCountry,
  getFabricanteById,
  getFabricantes,
  postFabricante,
  putFabricante,
  deleteFabricante
} = require('../controllers/fabricantes')

const fabricantesRouter = require('express').Router()

fabricantesRouter.get(
  '/año_de_fundacion/:año_de_fundacion',
  getFabricanteByYear
)
fabricantesRouter.get('/pais/:pais', getFabricanteByCountry)
fabricantesRouter.get('/:id', getFabricanteById)
fabricantesRouter.get('/', getFabricantes)
fabricantesRouter.post('/', postFabricante)
fabricantesRouter.put('/:id', putFabricante)
fabricantesRouter.delete('/:id', deleteFabricante)

module.exports = fabricantesRouter
