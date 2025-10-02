const dotEnv = require('dotenv');
dotEnv.config({path : './config.env'});
const mongoose = require('mongoose');
const app  = require('./app');

const mongoDbDriver = process.env.DB_DRIVER.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(mongoDbDriver).then( con => console.log('DB Connection Successful'))



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}/`)
})