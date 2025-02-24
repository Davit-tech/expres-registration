import path from "path";
import express from 'express';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import dotenv from 'dotenv';

import mongoose from 'mongoose';

dotenv.config();


import router from "./routers/index.js"

const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT


app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));



app.use(router)


app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT} `);
})
