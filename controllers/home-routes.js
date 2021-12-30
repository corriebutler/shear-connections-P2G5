const router = require('express').Router();
const path = require('path');
const { Cosmo } = require('../models');


router.get('/home', (req, res) => {
    Cosmo.findAll({

    }).then(cosmoData => {
        const cosmos = cosmoData.map(cosmo => cosmo.get({ plain: true }));
        
        res.render('homepage', { cosmos });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    
})

router.get('/login', (req, res) => {
    res.render('login');
  })
    

router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/sign-up-modal.html'))
});

// router.get('tranquil-sea-30993.herokuapp.com/', (req, res) => {
//     res.json({ message: 'hello' });
// });

module.exports = router;