import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({ path: "./.env" });

const app = express(); // <-- you forgot this line

// middlewares
app.use(express.json());

// routes (example)
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`✅ Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log("❌ MONGO db connection failed !!!", error);
  });
