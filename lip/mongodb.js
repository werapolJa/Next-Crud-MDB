import mongoose from 'mongoose';

export const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connect to MongoDB');
    } catch (error) {
        console.log('Error cant connect to MongoDB :', error);
    }
}


