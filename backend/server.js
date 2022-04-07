const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

connectDB ()
const app = express();

app.use (express.json());
app.use (express.urlencoded({ extended: false }));


app.use('/api/gastos', require('./routes/gastoRoutes'))
app.use (errorHandler);

app.listen(port, ()=>console.log(`El servidor se inició en el puerto ${port}`))