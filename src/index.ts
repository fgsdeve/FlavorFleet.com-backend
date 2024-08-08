import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { jwtCheck, jwtParse } from "./middleware/auth";
import MyUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log('connect to the database!'));

const app = express();
app.use(express.json());
app.use(cors());
app.use(jwtCheck);
app.use(jwtParse);

app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
  });

app.use("/api/my/user", MyUserRoute)

app.listen(7000, () => {
    console.log('server started on localhost:7000');
});
