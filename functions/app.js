//Point d'entrer pour Netlify

const serverless = require("serverless-http");
const express = require("express");
const app = express();

const tvRoutes = require("../tv/tvRoutes");
const ttRoutes = require("../tt/ttRoutes");

app.get("/", (req, res) => {
  res.send({ message: "Bienvenue sur l'application baiboly-gasy" });
});
app.use("/testameta/vaovao", tvRoutes);
app.use("/testameta/taloha", ttRoutes);

module.exports.handler = serverless(app);
