const router = require('express').Router();
const ratingRoutes = require('./rating-routes');

router.use('/ratings', ratingRoutes);

module.exports = router;