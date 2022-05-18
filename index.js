// modules and globals 
require('dotenv').config()
const express = require('express') 
const app = express()

//Express Settings 
app.set ('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/index', (req, res) => {
    res.render('index')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//Listen for Connections
app.listen(process.env.PORT)
