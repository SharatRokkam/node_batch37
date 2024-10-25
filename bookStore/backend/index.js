import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes/bookRoute.js";
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// app.use(cors());
app.use(express.json());

app.use("/books", router);

//CORS to connect frontend

//allow every single port request
// middlware to allow one route

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connection successful");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error occured while connecting", error);
  });
