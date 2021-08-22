import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
    console.log("DB Connected.")
}

export default connectDB;