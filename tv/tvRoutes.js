const mpanoratra = require("../mpanoratra");
const { readDb } = require("./readDb");
const path = require("path");

const router = require("express").Router();
const tv = path.join(__dirname, "..", "Testameta vaovao");

router.get("/mpanoratra", (req, res) => {
  mpanoratra(tv, req, res);
});
router.get("/boky/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
