import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);
        console.log(connectionInstance.connections);
        console.log(`MONGO DB Connected Sucessfully On Host:- ${connectionInstance.connections[0].host} Port:- ${connectionInstance.connections[0].port}`);

    } catch (error) {
        console.log('ERROR:: Mongo DB Connection Failed ', error);
        process.exit(1);
    }

};