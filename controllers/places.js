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
  if(!req.body.pic){
    delete req.body['pic']
  }
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

//Comments
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  req.body.rant ==='on' ? req.body.rant = true: req.body.rant = false;
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment._id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
        //console.log('err 1', err)
        res.render('error404')
      })
  })
  .catch(err => {
    //console.log('err 2', err)
    res.render('error404')
  })
})


module.exports = router