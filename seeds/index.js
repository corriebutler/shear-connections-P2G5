const sequelize = require('../config/connection');
const seedCosmo = require('./Cosmo')
const seedRating = require('./Rating');

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedCosmo();
    await seedRating();
  
    process.exit(0);
  };
  
  seedAll();

  module.exports = seedAll;