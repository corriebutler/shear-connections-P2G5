const Cosmo = require('../models/Cosmo');

const cosmodata = [
  {
    first_name: 'Chad',
    last_name: 'Branagan',
    username: 'CB',
    password: 'Hello123',
    mobile_number: '000-000-0000',
    email: 'chad@test.com',
    men_haircut: true,
    location: 'SoJo',
    cosmo_bio: 'stuff'
  },
  {
    first_name: 'Marcus',
    last_name: 'Ikegami',
    username: 'MI',
    password: '1234567',
    mobile_number: '000-000-0000',
    email: 'marcus@test.com',
    shave: false,
    location: 'SLC',
    cosmo_bio: 'I am so pretty'
  },
  {
    first_name: 'Connor',
    last_name: 'Lawrence',
    username: 'CL',
    password: 'easypassword',
    mobile_number: '000-000-0000',
    email: 'connor@test.com',
    men_haircut: true,
    location: 'Idaho',
    cosmo_bio: 'things'
  }

];

const seedCosmo = () => Cosmo.bulkCreate(cosmodata);

module.exports = seedCosmo;