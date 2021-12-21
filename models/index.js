const Cosmo = require('./Cosmo');
const Rating = require('./Rating');

Rating.belongsTo(Cosmo, {
    foreignKey: 'cosmo_id'
});

Cosmo.hasMany(Rating, {
    foreignKey: 'cosmo_id'
});



module.exports = { Cosmo, Rating };
