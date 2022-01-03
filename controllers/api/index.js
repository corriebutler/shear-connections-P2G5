const router = require('express').Router();
const ratingRoutes = require('./rating-routes');
const cosmoRoutes = require('./cosmo-routes');
const userRoutes = require('./user-routes');

router.use('/cosmo', cosmoRoutes);
router.use('/ratings', ratingRoutes);
router.use('/users', userRoutes);


module.exports = router;