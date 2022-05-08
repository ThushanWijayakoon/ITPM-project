import express from "express";
import cors from "cors";
import connectDB from "./Database/db.js";


import fileRoute from "./Routes/file.js";


const app = express();

app.use("/uploads", express.static("uploads"));

//Database connection
connectDB().then(
  () => console.log("Database Connected...."),
  (error) => console.log(error)
);

app.use(cors()); //cors added
app.use(express.json({ extended: false })); //enables json

app.get("/", (req, res) => res.send("API Running"));


app.use("/api/file", fileRoute);



const PORT = process.env.PORT || 5000;

//starting app
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

export default app;
