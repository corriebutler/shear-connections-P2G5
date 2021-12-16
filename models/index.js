const Cosmo = require('./Cosmo');
const Rating = require('./Rating');

Cosmo.hasMany(Rating, {
    foreignKey: 'user_name'
});

module.exports = { Cosmo, Rating };