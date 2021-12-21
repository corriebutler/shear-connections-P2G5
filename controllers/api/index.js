const router = require('express').Router();
const ratingRoutes = require('./rating-routes');
const cosmoRoutes = require('./cosmo-routes');

router.use('/cosmo', cosmoRoutes);
router.use('/ratings', ratingRoutes);


module.exports = router;