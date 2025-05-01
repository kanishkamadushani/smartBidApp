import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import itemRouter from "./routes/item.js";
import bidRouter from "./routes/bid.js";
import notificationRouter from "./routes/notification.js";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request method : ${req.method}, Request path: ${req.path}`);
  next();
});

app.use("/api/user", userRouter);
app.use("/api/item", itemRouter);
app.use("/api/bid", bidRouter);
app.use("/api/notification", notificationRouter);

//Server and DB connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`DB connected, Bankend server is running port no: ${port}`);
    });
  })
  .catch((err) => console.log(err));
