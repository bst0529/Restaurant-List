const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const restaurantList = require('./restaurant.json')

app.engine('hbs',exphbs.engine({extname: '.hbs', defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/restaurants/1', (req, res) => {
    res.render('show')
})

app.listen(port, () => {
    console.log(`Web is starting on http://localhost:${port}`)
})