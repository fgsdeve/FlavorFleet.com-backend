import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import MyUserRoute from './routes/MyUserRoute';

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log('Connected to the database!'))
  .catch((err) => console.error('Database connection error:', err));

const app = express();
app.use(express.json());

// Configure CORS
const corsOptions = {
  origin: 'https://flavorfleet-com-frontend.onrender.com', // Allow requests from your frontend
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", MyUserRoute);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
});
