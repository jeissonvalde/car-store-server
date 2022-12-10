import express from 'express'
// import * as carServices from '../services/cars-services'

const router = express.Router()

router.get('/', (_req, res) => {

  res.sendFile('index.html')
})

/*
router.get('/car-info/:id', (req, res) => {
  let id = req.body.id

  let prom = (id) => new Promise((reject, resolve) => {
    console.log(id)

    // id !== null | id !== ''
      // ? resolve(db.get('cars').byId(id))
      // : reject(db.get('cars').byId(id))
  })
  
  prom(id)
    .then(_car_data => {
      res.send({ carsData: carServices.getEntriesWithOutSensitiveValues() })
      // res.send(car_data)
    })
    .catch(_err => {
      res.sendStatus(500)
    })
  
})
*/


export default router