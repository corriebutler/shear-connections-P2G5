const Rating = require('../models/Rating');

const ratingdata = [
    {
      value: 5,
      cosmo_id: 1
    }
    
  ];
  
  const seedRating = () => Rating.bulkCreate(ratingdata);
  
  module.exports = seedRating;