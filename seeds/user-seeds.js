const User = require('../models/User');

const usersdata = [
    {
        username: 'marcusikegami',
        password: 'password'
    }
]

const seedUsers = () => User.bulkCreate(usersdata);

const sequelize = require('../config/connection');
const seedAll = async () => {
    
    
    await seedUsers();
  
    process.exit(0);
  };
  
  seedAll();