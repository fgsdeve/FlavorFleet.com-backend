import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from './routes/MyUserRoute';
import { v2 as cloudinary } from "cloudinary";
import myRestaurantRoute from "./routes/MyRestaurantRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
.then(() => console.log('Connected to the database!'))
.catch((err) => {
  console.error('Database connection error:', err);
  process.exit(1)
});



//Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


const app = express();
app.use(cors());
app.use(express.json());




//Health check 
app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
  });

//API end point
app.use("/api/my/user", MyUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
console.log("Rota /api/my/restaurant foi registrada");


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`);
});
  