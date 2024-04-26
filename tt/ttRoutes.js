const { readDb } = require("./readDb");

const router = require("express").Router();

router.get("/:ecrivain/:toko?/:andininy?/:farany?", readDb);

module.exports = router;
