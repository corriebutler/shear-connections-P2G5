const router = require("express").Router();
const path = require("path");
const { Cosmo, User, Rating } = require("../models");

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
  })
    .then((cosmoData) => {
      const cosmos = cosmoData.map((cosmo) => cosmo.get({ plain: true }));

      res.render("homepage", { cosmos });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/cosmosignup", (req, res) => {
  res.render("cosmosignup");
});

router.get("/usersignup", (req, res) => {
  res.render("usersignup");
});

router.get("/review", (req, res) => {
  res.render("review");
});
module.exports = router;
