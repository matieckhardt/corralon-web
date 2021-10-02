const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
require("./database");
const config = require("./config");
const exphbs = require("express-handlebars");
const CORS = require("cors");
const app = express();
const path = require("path");

// Settings
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/views")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/Content")));
app.use(express.static(path.join(__dirname, "public/fonts")));
app.use(express.static(path.join(__dirname, "public/img")));
app.use(express.static(path.join(__dirname, "public/img/carousel")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/slick")));
app.use(CORS());
console.log(CORS())
app.engine(
  ".hbs",
  exphbs({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partials: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

app.use(morgan('dev'));

// Routes
app.use(require("./routes/routes"));

// Init
app.listen(process.env.PORT || 3000);

// npm run dev (correr node)
