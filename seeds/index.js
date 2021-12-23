
const seedCosmo = require('./cosmo-seeds')
const seedRating = require('./rating-seeds');

const sequelize = require('../config/connection');
const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedCosmo();
    await seedRating();
  
    process.exit(0);
  };
  
  seedAll();

  // module.exports = seedAll;