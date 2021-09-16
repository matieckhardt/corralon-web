  
const { Router } = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const carousel = require("../models/images");

const router = Router();

const ruta = path.join(__dirname, "../public/");

// rutas del colegio

router.get("/", (req, res) => {
  res.send(index);
});
router.get("/Home", function (req, res) {
  res.sendFile(ruta + "Index.html");
});
router.get("/Categories", function (req, res) {
  res.sendFile(ruta + "categories.html");
});
router.get("/Home/Products", function (req, res) {
  res.sendFile(ruta + "products.html");
});
router.get("/AboutUs", function (req, res) {
  res.sendFile(ruta + "about-us.html");
});
router.get("/Contact", function (req, res) {
  res.sendFile(ruta + "contact.html");
});
router.get("/Sales", function (req, res) {
  res.sendFile(ruta + "sales.html");
});
router.get("/ObtenerImagenesCarrousel", function (req, res) {
  res.sendFile(ruta + "/jsons/car.json");
});
router.get("/img/carousel", function (req, res) {
  res.sendFile(ruta + "/jsons/car.json");
});

// Filtros Categorias

router.get("/OperacionCategorias/ObtenerCategorias", function (req, res) {
  res.sendFile(ruta + "/jsons/categories.json");
});
router.get("/OperacionCategorias/ObtenerCategoria", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});
router.get("/OperacionCategorias/ObtenerItemsCategoria", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});
router.get("/OperacionCategorias/AgregarItemNuevo", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});
router.get("/OperacionCategorias/AgregarImagenesItemNuevo", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});
router.get("/OperacionCategorias/EliminarItem", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});
router.get("/OperacionCategorias/ObtenerItem", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});
router.get("/OperacionCategorias/ModificarItem", function (req, res) {
  res.sendFile(ruta + "/jsons/productos.json");
});


// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await carousel.find(
    {},
    {
        carouselLanding: 0,
        HomeId: "string",
        HomeData: "string",
      },)

	res.send(posts)
})

module.exports = router

// POST 

router.post("/", (req, res) => {
  res.json(req.body);
});

module.exports = router;