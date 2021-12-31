const router = require("express").Router();
const path = require("path");
const { Cosmo } = require("../models");

router.get("/home", (req, res) => {
  Cosmo.findAll({})
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
module.exports = router;
