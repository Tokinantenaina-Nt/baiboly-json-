const express = require("express");
const app = express();

const tvRoutes = require("./tv/tvRoutes");
const ttRoutes = require("./tt/ttRoutes");

app.get("/", (req, res) => {
  res.send({ message: "Bienvenue sur l'application baiboly-gasy" });
});
app.use("/testameta_vaovao", tvRoutes);
app.use("/testameta_taloha", ttRoutes);

app.listen(5000, () => {
  console.log("port: on 5000");
});
