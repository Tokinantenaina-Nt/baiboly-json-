const mpanoratra = require("../mpanoratra");
const { readDb } = require("./readDb");

const router = require("express").Router();
const tv = "./Testameta vaovao";

router.get("/mpanoratra", (req, res) => {
  mpanoratra(tv, req, res);
});
router.get("/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
