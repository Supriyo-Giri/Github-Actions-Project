import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import userRoutes from './routes/user.route.js'
import cors from 'cors';
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// main routes
app.use("/api/user", userRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

try {
    connectDb();
    app.listen(PORT, ()=>{
        console.log(`Server started on port: http://localhost:${PORT}/`);
    })
} catch (error) {
    console.log(`Server was unable to start: ${error}`);
}