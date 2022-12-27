import express from 'express'
import carServices from '../services/cars-services'

const router = express.Router()

router.get('/', (_req, res) => {

  res.sendFile('index.html')
})

router.use(carServices)



export default router