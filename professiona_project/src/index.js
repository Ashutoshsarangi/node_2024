import dotenv from 'dotenv';
import {connectDB} from './db/index.js';
import {app} from './app.js';


dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 3000;

connectDB()
.then(() => {
    app.on('error', (error) => {
        console.log(`Express Server Error !!!, ${error}`);
        throw error;
    });
    app.listen(PORT, () => {
        console.log(`Server is Running at ${PORT}`);
    });
})
.catch((e) => {
    console.log(`MongoDB Connection Failed !!!, ${e}`);
});