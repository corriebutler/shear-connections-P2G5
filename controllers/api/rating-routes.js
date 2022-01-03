const router = require('express').Router();
const { Cosmo, Rating, User } = require('../../models');

router.get('/', (req, res) => {
    Rating.findAll({})
    .then(ratingData => res.json(ratingData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
});

router.get('/:id', (req, res) => {
    Rating.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
})


// get all reviews by a user
router.get('/user/:id', (req, res) => {
    Rating.findAll({
        where: {
            user_id: req.params.id
        }
    })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
    
})

//get all reviews about a comso
router.get('/cosmo/:id', (req, res) => {
    Rating.findAll({
        where: {
            cosmo_id: req.params.id
        }
    })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    })
    
})



router.post('/', (req, res) => {
    Rating.create({
        value: req.body.value,
        comment: req.body.comment,
        cosmo_id: req.body.cosmo_id,
        user_id: req.session.user_id

    })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
    Rating.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(ratingData => res.json(ratingData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

module.exports = router;