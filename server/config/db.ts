// This is a placeholder for the Mongoose library. In a real Node.js environment,
// you would import it: `import mongoose from 'mongoose';`
const mongoose = {
  connect: async (uri: string) => {
    console.log(`Simulating connection to MongoDB at ${uri}...`);
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async connection
    console.log("MongoDB connected successfully (simulation).");
    return { connection: { host: 'simulated-host' } };
  },
};

export const connectDB = async () => {
  try {
    // In a real application, the MONGO_URI would come from a .env file
    const MONGO_URI = 'mongodb+srv://user:pass@cluster.mongodb.net/maruthi-toolings?retryWrites=true&w=majority';
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Host: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB:`, error);
    // In a real app, you would exit the process if the DB connection fails
    // process.exit(1);
  }
};
