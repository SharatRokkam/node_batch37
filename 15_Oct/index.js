const express = require("express");
const app = express();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

//bodyParser
app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.static("public"));

//api - endpoint
//http://localhost:5000/products
//CRUD - Create,  Read, Update and Delete

// project - ecommerce -> products, users, recipes, restuarant , restaurtant,
// MVC - Model View Controller
// --> products.js, users.js, recipes.js
// www.xyz.com/users

app.post("/products", (req, res) => {
  //   console.log(req.body);
  products.push(req.body);
  res.json(req.body);
});

// Read - all the products
app.get("/products", (req, res) => {
  res.json(products);
});

//Read - Get one product
app.get("/products/:id", (req, res) => {
  const id = +req.params.id;
  const product = products.find((p) => p.id == id);
  res.json(product);
});

app.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});

app.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id == id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

app.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id == id);
  products.splice(productIndex, 2);
  res.status(201).json();
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
