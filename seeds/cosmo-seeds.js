const Cosmo = require('../models/Cosmo');

const cosmodata = [
    {
      name: 'Chad Branagan',
      user_name: 'CB',
      password: 'Hello123',
      contact_info: 'alkdhfalkjdhfaj',
      specialties: 'this or that',
      location: 'SoJo',
      cosmo_bio: 'stuff'
    },
    {
      name: 'Marcus Ikegami',
      user_name: 'MI',
      password: '1234567',
      contact_info: 'asdfasdfdsfajdhfaj',
      specialties: 'this and sometimes that',
      location: 'SLC',
      cosmo_bio: 'I am so pretty'
    },
    {
      name: 'Connor Lawrence',
      user_name: 'CL',
      password: 'easypassword',
      contact_info: 'carrier pigeon',
      specialties: 'nose injections',
      location: 'Idaho',
      cosmo_bio: 'things'
    }
    
  ];
  
  const seedCosmo = () => Cosmo.bulkCreate(cosmodata);
  
  module.exports = seedCosmo;