const Rating = require('../models/Rating');

const ratingdata = [
    {
      id: 1,
      value: 5,
    }
    
  ];
  
  const seedRating = () => Rating.bulkCreate(ratingdata);
  
  module.export = seedRating;