const mpanoratra = require("../mpanoratra");
const { readDb } = require("./readDb");

const router = require("express").Router();
const tt = path.join(__dirname, "..", "Testameta taloha");

router.get("/mpanoratra", (req, res) => {
  mpanoratra(tv, req, res);
});
router.get("/boky/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
