const router = require('express').Router();
const { Cosmo, Rating } = require('../../models');

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

router.post('/', (req, res) => {
    Rating.create({
        value: req.body.value,
        comment: req.body.comment,
        cosmo_id: req.body.cosmo_id,
        user_id: req.body.user_id

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