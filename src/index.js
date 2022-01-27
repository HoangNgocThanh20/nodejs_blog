const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// connect to DB

db.connect()

app.use(express.static(path.join(__dirname, 'public')))

// help get req of post method (body value)

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json())

// morgan library to help HTTP logger
app.use(morgan('combined'))

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs')
// pattern to point to the views folder
app.set('views', path.join(__dirname, 'resources', 'views'))

// Route init
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
