const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Madison',
    state: 'WI',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/Dumplings.jpg' //Photo by charlesdeluvio(https://unsplash.com/photos/D-vDQMTfAAU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) on Unsplash
  }, {
    name: 'Coding Cat Cafe',
    city: 'Charleston',
    state: 'SC',
    cuisines: 'Coffee, Bakery',
    pic: '/images/eggs and sandwhich.jpg' //Photo by Joseph Gonzalez(https://unsplash.com/photos/fdlZBWIP0aM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) on Unsplash (unsplash.com)
  }]
  
router.get('/', (req, res) => {
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  } 
  else if (!places[id]) {
    res.render('error404')
  }
  else{
    res.render('places/show', { place: places[id], id })
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})
 
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


module.exports = router

