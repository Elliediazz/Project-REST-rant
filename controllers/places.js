const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})

//New places form ??? why does /new not work?
router.get('/new', (req, res) => {
  res.render('places/new')
})

//Get place by ID
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

//New places submitted
router.post('/', (req, res) => {
  //console.log (req.body)
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//Delete
router.delete('/:id', (req, res) => {
  res.send('Delete /places/:id stub')
})

router.delete('/:id/rant/:rantId', (req, red) => {
  res.send('GET /places/:id/rant/:rantid stub')
})

//Edit 
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})



module.exports = router
