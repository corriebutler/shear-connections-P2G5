const router = require("express").Router();
const { Cosmo, Rating, User } = require("../../models");

router.get("/", (req, res) => {
  Cosmo.findAll({
    include: [
      {
        model: Rating,
        attributes: ["id", "user_id", "cosmo_id", "value", "comment"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((cosmoData) => {
    res.json(cosmoData);
  });
});

router.get("/:id", (req, res) => {
  Cosmo.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Rating,
        attributes: ["id", "user_id", "cosmo_id", "value", "comment"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  }).then((cosmoData) => {
    const post = cosmoData.get({ plain: true });
    // res.json(post);
    res.render("single-cosmo", { post });
  });
});

//get route for all cosmos in a city
router.get("/city/:city", (req, res) => {
  Cosmo.findAll({
    order: ["last_name"],
    where: {
      location: req.params.city,
    },
  })
    .then((cosmoData) => {
      res.json(cosmoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  if (
    first_name &&
    last_name &&
    username &&
    password &&
    mobile_number &&
    email &&
    location &&
    specialties &&
    cosmo_bio
  ) {
    Cosmo.create(req.body)
      .then((newCosmo) => {
        res.json(newCosmo);
      })
      .catch((err) => {
        res.json(err);
      });
  }
});

router.post("/login", (req, res) => {
  Cosmo.findOne({
    where: {
      username: req.body.username,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No Cosmo with that user name!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    res.json({ user: dbUserData, message: "You are now logged in!" });
  });
});

router.put("/:id", (req, res) => {
  Cosmo.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Cosmo.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
