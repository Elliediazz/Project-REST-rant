const router = require('express').Router()

let places = [{
    name: 'H-Thai-ML',
    city: 'Madison',
    state: 'WI',
    cuisines: 'Thai, Pan-Asian',
    pic: 'public/images/Dumplings.jpg' //Photo by charlesdeluvio(https://unsplash.com/photos/D-vDQMTfAAU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) on Unsplash
  }, {
    name: 'Coding Cat Cafe',
    city: 'Charleston',
    state: 'SC',
    cuisines: 'Coffee, Bakery',
    pic: 'public/images/eggs and sandwhich.jpg' //Photo by Joseph Gonzalez(https://unsplash.com/photos/fdlZBWIP0aM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink) on Unsplash (unsplash.com)
  }]
  
  router.get('/', (req, res) => {
    res.render('places/index', { places })
})

module.exports = router

