import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

import errorHandler from './middlewares/errorHandler.js';
import paginationRoute from './routes/pagination.js';

//Deps
const app = express();
dotenv.config({ path: './config.env' });
connectDB()

//Middleware
app.use(bodyParser.json());

//Routes
app.use('/', paginationRoute)
app.use(errorHandler);

//Listen
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))
process.on('unhandledRejection', (err) => {
    console.log(`An Error Occured : ${err}`)
    server.close(() => process.exit(1))
})