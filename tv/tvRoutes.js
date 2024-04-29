const mpanoratra = require("../mpanoratra");
const { readDb } = require("./readDb");
const path = require("path");

const tv = path.join(__dirname, "..", "testameta_vaovao");

const router = require("express").Router();

router.get("/mpanoratra", (req, res) => {
  mpanoratra(tv, req, res);
});
router.get("/boky/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
