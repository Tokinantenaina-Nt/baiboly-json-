const mpanoratra = require("../mpanoratra");
const { readDb } = require("./readDb");
const tt = "./Testameta taloha";
const router = require("express").Router();

router.get("/mpanoratra", (req, res) => {
  mpanoratra(tt, req, res);
});
router.get("/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
