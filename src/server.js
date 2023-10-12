import express from "express";
import dotenv from "dotenv";
dotenv.config();
import userRoute from "./routes/user-routes";

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/api", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
