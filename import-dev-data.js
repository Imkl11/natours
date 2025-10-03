const dotEnv = require('dotenv');
dotEnv.config({path : './config.env'});
const mongoose = require('mongoose');
const fs = require('fs');
const Tour =  require('./models/tourModels')

const mongoDbDriver = process.env.DB_DRIVER.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(mongoDbDriver).then( con => console.log('DB Connection Successful'));

const tourData = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, (err) =>{
    console.log('Data Read Successful')
}))


const importDevData = async () =>{
    try {
        const tours = await Tour.create(tourData);
        console.log('Tours Data Imported Successful')
    } catch (error) {
        console.log('Tours Data Imported Fail', error)
    }

    process.exit()
}

const deleteDbData = async() =>{
    try {
        const tours = await Tour.deleteMany();
        console.log('DB Clearing Successful')
    } catch (error) {
         console.log('DB Clearing Fail', error)
    }

    process.exit()
}

if (process.argv[2] === '--import') {
    importDevData()
} else if(process.argv[2] === '--delete'){
   deleteDbData() 
}

 