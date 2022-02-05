let router = require("express").Router();
let indexController = require("../controllers/index");

router.route("/").get(indexController.renderHomePage);

module.exports = router;
