const Cosmo = require('./Cosmo');
const Rating = require('./Rating');


Cosmo.hasMany(Rating, {
    foreignKey: 'cosmo_id'
});

Rating.belongsTo(Cosmo, {
    foreignKey: 'cosmo_id'
});


module.exports = { Cosmo, Rating };
