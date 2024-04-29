const fs = require("fs");
const path = require("path");

module.exports.readDb = (req, res) => {
  let { ecrivain, toko, andininy, farany } = req.params;

  const ecrivainLowerCase = ecrivain.toLowerCase();
  const filepath = path.join(
    __dirname,
    "..",
    "testameta_taloha",
    `${ecrivainLowerCase}.json`
  );

  // lecture des db .json

  fs.readFile(filepath, "utf8", async (err, data) => {
    if (!data) {
      return res.status(404).json({ message: "Hamarino Ny mpanoratra ()" });
    }
    try {
      const jsonData = await JSON.parse(data);

      if (
        isNaN(parseInt(toko)) ||
        isNaN(parseInt(andininy)) ||
        (farany && isNaN(parseInt(farany)))
      ) {
        return res
          .status(400)
          .json({ message: "Hamarino ny TOKO sy ny Andininy" });
      }
      let result;
      result =
        jsonData[toko] && jsonData[toko][andininy]
          ? [andininy + "-" + jsonData[toko][andininy]]
          : ["Tsy hita ity toko sy andininy ity"];
      farany = farany <= andininy ? 0 : farany;
      let diff = andininy ? farany - andininy : ".";

      if (farany && jsonData[toko] && jsonData[toko][andininy] && diff >= 0) {
        for (let i = 0; i < diff; i++) {
          andininy++;
          if (jsonData[toko][andininy]) {
            result.push(andininy + "-" + jsonData[toko][andininy]);
          } else {
            break;
          }
        }
      }
      //SEND
      andininy = req.params.andininy;
      const andininyRendu = diff >= 0 ? andininy : andininy + " - ";

      const faranyRendu = parseInt(farany) > andininy ? " - " + farany : "";

      const resultRendu = result.join("");

      if ([result].toString() != "") {
        res.json({
          message: `${ecrivain} ${toko} : ${andininyRendu} ${faranyRendu} : ${resultRendu}`
        });
      } else {
        res.status(404).json({
          message: `${ecrivain} ${toko} : ${andininyRendu} ${faranyRendu}Tsy misy ilay andininy tadiavinao`
        });
      }
    } catch (parseError) {
      console.error("Erreur de parsing JSON:", parseError);
      res.status(500).send("Erreur de parsing JSON");
    }
  });
};
