const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


// morgan library to help HTTP logger 
app.use(morgan('combined'))

app.engine('hbs',engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs');
// pattern to point to the views folder
app.set('views', path.join(__dirname, 'resources','views'))

// Route init
route(app)

// Template engine to help write HTML structure

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
