const dotEnv = require('dotenv');
dotEnv.config({path : './config.env'})
const app  = require('./app');

console.log(process.env)

const port = 4000;
app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}/`)
})