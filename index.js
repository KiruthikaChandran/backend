//import all packages
import express, { response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./Config/db.js";
import productRouter from "./Routes/route.js"
dotenv.config();

//using express
const app = express();
connectDb();

//default middleware
app.use (express.json());
app.use(cors());

//dummy route for cannot get
app.get("/",(req,res)=> {
   res.send("Paradise Found 🤍")
})

app.use("/api/products",productRouter)
//initalizing port and starting server
 const port = 5000;
 app.listen(port,() => {
    console.log(`server is  started at ${port} and running`);
 })

