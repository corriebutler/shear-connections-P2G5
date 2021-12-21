const router = require('express').Router();
const { Cosmo, Rating } = require('../../models');

router.get('/', (req, res) => {
    Rating.findAll({
        attributes: ['id', 'cosmo_id', 'value']
    })
        .then(ratingData => res.json(ratingData))
        .catch(err=> {
            console.log(err);
            res.status(500).json(err);
          })
});

router.

module.exports = router;