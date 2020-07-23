const express = require('express');
const config = require('../config');
const morgan = require('morgan');
const helmet =  require('helmet');
const cors = require('cors');  //Connect/Express middleware
const middlewares = require('./middlewares');
const app =  express();
const logs = require('./api/logs');
const mongoose = require('mongoose')
const port = config.serverPort
const DB = config.databaseUrl
const checkConnectionofDB = mongoose.connection


//DB connection
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
checkConnectionofDB.on('error', error => console.log('An error took place', error))
checkConnectionofDB.once('open', () => console.log(`DB Connected in port ${port}`))


//libraries
app.use(morgan('common'))
app.use(helmet());
app.use(cors({
    origin: `http://localhost:${port}`,
}));
app.use(express.json());

//api
app.use('/api/logs', logs);

app.get('/', (req,res) => {
    res.json({
        message: 'Hellow World 😋'
    })
})

//middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


app.listen(port, (req,res) => {
    console.log(`App listening at port http://localhost:${port}/`)
}) 