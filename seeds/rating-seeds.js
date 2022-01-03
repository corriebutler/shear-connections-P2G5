const Rating = require('../models/Rating');

const ratingdata = [
    {
      value: 5,
      comment: 'Best Cosmo Around',
      cosmo_id: 1,
      user_id: 1
    },
    {
      value: 4,
      comment: 'Pretty good but not the best',
      cosmo_id: 2,
      user_id: 1
    },
    {
      value: 2,
      comment: 'Didnt say much but my mom called me handsome afterwards',
      cosmo_id: 3,
      user_id: 1
    },
  ];
  
  const seedRating = () => Rating.bulkCreate(ratingdata);
  
  module.exports = seedRating;