const fs = require("fs");
const path = require("path");

function mpanoratra(boky, req, res) {
  fs.readdir(boky, (err, fichiers) => {
    if (err) {
      console.error("Erreur lors de la lecture du dossier :", err);
      return;
    }

    const fichiersDansDossier = fichiers.filter(fichier => {
      return fs.statSync(path.join(boky, fichier)).isFile();
    });

    const mpanoratra = fichiersDansDossier.map(fichier => {
      return path.parse(fichier).name;
    });

    return res.status(200).json({ mpanoratra });
  });
}

module.exports = mpanoratra;
