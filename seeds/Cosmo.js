const { Cosmo } = require('../models');

const cosmodata = [
    {
      name: 'Chad Branagan',
      user_name: 'CB',
      password: 'Hello123',
      contact_info: 'alkdhfalkjdhfaj',
      specialties: 'this or that',
      location: 'SoJo',
      cosmo_bio: 'stuff'
    }
    
  ];
  
  const seedCosmo = () => Cosmo.bulkCreate(cosmodata);
  
  seedCosmo();