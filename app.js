const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const restaurantList = require('./restaurant.json')

app.engine('hbs',exphbs.engine({extname: '.hbs', defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index',{restaurants: restaurantList.results})
})

app.get('/search', (req, res) => {
    let restaurants = restaurantList.results.filter(restaurant => {return restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase())})
    res.render('index',{restaurants, keyword: req.query.keyword})
})

app.get('/restaurants/:id', (req, res) => {
    let restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.id)
    res.render('show',{restaurant})
})

app.listen(port, () => {
    console.log(`Web is starting on http://localhost:${port}`)
})