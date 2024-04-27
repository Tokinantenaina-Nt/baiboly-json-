const mpanoratra = require("../mpanoratra");
const { readDb } = require("./readDb");
const path = require("path");

const tt = path.join(__dirname, "..", "testameta_taloha");

const router = require("express").Router();

router.get("/mpanoratra", (req, res) => {
  mpanoratra(tt, req, res);
});
router.get("/boky/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
