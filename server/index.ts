import express from 'express'
import path from 'path'
import routes from './routes'
import bodyParser from 'body-parser'
import config from './config/srv.json'
// import http
// import nodemailer

const app = express()

// middlewares
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(routes)
app.use(bodyParser.urlencoded({extended: true}))

app.listen(config.port, () => {
  console.log('Server listen on port: ', config.port)
})