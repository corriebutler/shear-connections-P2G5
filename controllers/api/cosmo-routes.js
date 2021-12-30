const router = require('express').Router();
const { Cosmo, Rating } = require('../../models');

router.get('/', (req, res) => {
    Cosmo.findAll().then((cosmoData) => {
      res.json(cosmoData);
    });
  });

  router.get('/:id', (req, res) => {
    Cosmo.findByPk(req.params.id).then((cosmoData) => {
      res.json(cosmoData);
    });
  });

  //get route for all cosmos in a city
  router.get('/city/:city', (req, res) => {
    Cosmo.findAll({
      order: ['name'],
      where: {
        location: req.params.city
      }
    }).then((bookData) => {
      res.json(bookData);
    });
  });

router.post('/', (req, res) => {
  
    Cosmo.create(req.body)
      .then((newCosmo) => {
        res.json(newCosmo);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  router.post('/login', (req, res) => {
    
      Cosmo.findOne({
        where: {
          username: req.body.username
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No Cosmo with that user name!' });
          return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
  
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }
        
        res.json({ user: dbUserData, message: 'You are now logged in!' });
    
      });  
    });

    router.put('/:id', (req, res) => {
     
      Cosmo.update(req.body, {
        individualHooks: true,
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData[0]) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

    router.delete('/:id', (req, res) => {
      Cosmo.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
    });

module.exports = router;