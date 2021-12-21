const Cosmo = require('./Cosmo');
const Rating = require('./Rating');

// Rating.belongsTo(Cosmo, {
//     foreignKey: 'cosmo_id'
// });

Cosmo.hasMany(Rating, {
    foreignKey: 'user_name'
});



module.exports = { Cosmo, Rating };
