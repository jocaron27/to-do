const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const path = require("path");
const routes = require("./routes/index");
const logger = require("./logger");
const addListRoutes = require("./routes/addList");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const PORT =  3000;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static('public'));

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});
app.set("view engine", "html");
app.engine("html", nunjucks.render);

app.use(logger);
app.use("/", routes);
app.use("/addList", addListRoutes);

app.listen(PORT, function() {
  console.log("server is running at port 3000");
});
