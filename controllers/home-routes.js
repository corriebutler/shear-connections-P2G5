const router = require('express').Router();
const sequelize = require('../config/connection');
const landingPage = require('../public/index.html');

router.get('/', (req, res) => {
    res.json({ message: 'hello' });
    // res.sendFile(landingPage);
});

module.exports = router;