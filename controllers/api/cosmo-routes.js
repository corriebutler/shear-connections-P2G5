const router = require('express').Router();
const { Cosmo, Rating } = require('../../models');

router.get('/', (req, res) => {
    res.json({ message: "hello" })
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