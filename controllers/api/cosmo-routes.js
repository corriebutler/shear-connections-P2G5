const router = require('express').Router();
const { Cosmo, Rating } = require('../../models');

router.get('/', (req, res) => {
    res.json({ message: "hello" })
});

module.exports = router;