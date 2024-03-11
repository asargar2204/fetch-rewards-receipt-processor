import express from "express";
import dotenv from "dotenv";
import receiptRoutes from "./routes/fetch-rewards-points.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app
  .listen(port, () => {
    console.log(" App is listening on port " + port);
  })
  .on("error", (err) => {
    console.error("App failed to start ", err);
    process.exit(1);
  });

app.use(express.json());
app.use("/receipts", receiptRoutes);
