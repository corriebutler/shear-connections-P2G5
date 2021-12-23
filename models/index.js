const Cosmo = require('./Cosmo');
const User = require('./User');
const Rating = require('./Rating');


Cosmo.hasMany(Rating, {
    foreignKey: 'cosmo_id'
});

User.hasMany(Rating, {
    foreignKey: 'user_id'
})

Rating.belongsTo(Rating, {
    foreignKey: 'user_id'
})

Rating.belongsTo(Cosmo, {
    foreignKey: 'cosmo_id'
});



module.exports = { Cosmo, Rating, User };
