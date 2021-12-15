const sequelize = require('../config/connection');
const seedCosmo = require('./Cosmo')

const seedAll = async () => {
    await sequelize.sync({ force: true });
  
    await seedCosmo();
  
    process.exit(0);
  };
  
  seedAll();

  module.exports = seedAll;