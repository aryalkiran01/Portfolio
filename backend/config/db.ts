import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions); 

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};
