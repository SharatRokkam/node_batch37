// MVC - Model View Controller Architecture
const express = require("express");
const app = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/users");



app.use(express.json());
// app.use("/api/v1", productRouter);
app.use("/products", productRouter.router);
app.use("/users", userRouter.router);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
