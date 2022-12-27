import express from 'express'
import carStoreAPI from 'car-store-api/build/index.js'

const router = express.Router()

router.get('/car-info/:id', (req, res) => {
  let id: string = req.body.id

  carStoreAPI.
})

export default router