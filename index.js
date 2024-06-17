//npm init --yes
//npm install express
//npm install express-handlebars
//npm i -g nodemon
//npm i nodemon --D
//npm install --save jquery
//npm install --save bootstrap

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = 3000;

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  exphbs.engine({
    extname: ".handlebars",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials",
  })
);
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js"));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(express.static(__dirname + "/img"));

app.get("/", (req, res) => {
  res.render("main", {
    layout: "main",
    productos: ["banana", "cebollas", "lechuga", "papas", "pimenton", "tomate"],
  });
});
//iniciar servidor
app.listen(PORT, () => {
  console.log(`servidor express escuchando en el puerto ${PORT}`);
});
//Mensaje en caso de que pagina no esté definida
app.get("*", (req, res) => {
  res.send("Esta pagina no existe  ");
});
