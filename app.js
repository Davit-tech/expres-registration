import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


import router from "./routers/index.js"

const publicPath = path.resolve('public')

const viewsPath = path.resolve('views');


const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const app = express()
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT

app.use(express.json())
app.use(express.static(publicPath));


app.set("view engine", "ejs");
app.set("views", viewsPath);


app.use(router)


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} `);
})
