const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
  })  

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/css/images/soup.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/css/images/bread.jpg'
      }]

    res.render('places/index', { places})
})

router.post('/',(req,res) => {
    res.redirect('/places')
})



module.exports = router

