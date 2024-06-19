const {
  getModeloByYear,
  getModeloByCv,
  getModeloByPrice,
  getModeloByModel,
  getModeloById,
  getModelos,
  postModelo,
  putModelo,
  deleteModelo
} = require('../controllers/modelos')

const modelosRouter = require('express').Router()

modelosRouter.get('/cv/:cv', getModeloByCv)
modelosRouter.get('/año/:año', getModeloByYear)
modelosRouter.get('/precio/:precio', getModeloByPrice)
modelosRouter.get('/modelo/:modelo', getModeloByModel)
modelosRouter.get('/:id', getModeloById)
modelosRouter.get('/', getModelos)
modelosRouter.post('/', postModelo)
modelosRouter.put('/:id', putModelo)
modelosRouter.delete('/:id', deleteModelo)

module.exports = modelosRouter
