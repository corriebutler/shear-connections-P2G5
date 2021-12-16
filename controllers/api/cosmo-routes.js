const router = require('express').Router();
const { Cosmo, Rating } = require('../../models');

router.get('/', (req, res) => {
    Cosmo.findAll().then((cosmoData) => {
      res.json(cosmoData);
    });
  });

  router.get('/:id', (req, res) => {
    Cosmo.findByPk(req.params.id).then((cosmoData) => {
      res.json(cosmoData);
    });
  });

  //get route for all cosmos in a city
  router.get('/city/:city', (req, res) => {
    Cosmo.findAll({
      order: ['name'],
      where: {
        location: req.params.city
      }
    }).then((bookData) => {
      res.json(bookData);
    });
  });

router.post('/', (req, res) => {
    Cosmo.create(req.body)
      .then((newCosmo) => {
        res.json(newCosmo);
      })
      .catch((err) => {
        res.json(err);
      });
  });

module.exports = router;