import express, { response } from 'express';
import { router } from "./routes";

import 'reflect-metadata';

import "./database";

const app = express();

app.listen(3334, () => console.log("Server is running!"))

app.use(express.json()); 
app.use(router); 