const express = require("express");
const router = express.Router();
const usersController = require("../controller/users");

router
  .post("/", usersController.createProduct)
  .get("/", usersController.getAllProducts)
  .get("/:id", usersController.getProduct)
  .put("/:id", usersController.replaceProduct)
  .patch("/:id", usersController.updateProduct)
  .delete("/:id", usersController.deleteProduct);

exports.router = router;
