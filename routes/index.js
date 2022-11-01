const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("auth/signup", (req, res, next) => {
  res.render("signup");
});

module.exports = router;
