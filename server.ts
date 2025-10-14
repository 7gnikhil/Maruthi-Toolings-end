import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { getProductsHandler, getServicesHandler, getCareersHandler, getUpdatesHandler, createInquiryHandler } from './server/controllers/data.controller';
import { connectDB } from './server/config/db';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// FIX: Explicitly type `app` as `Express` to ensure correct type inference for its methods, resolving overload errors.
// Relying on inference as explicit types caused issues.
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/inquiry', createInquiryHandler);
app.get('/api/products', getProductsHandler);
app.get('/api/services', getServicesHandler);
app.get('/api/careers', getCareersHandler);
app.get('/api/updates', getUpdatesHandler);

// Serve static files from the React app build directory.
// In a CommonJS environment, __dirname refers to the directory of the current file.
// After the build, server.js is located in the 'dist' folder, so __dirname will be 'dist'.
const clientBuildPath = path.join(__dirname, 'client');
app.use(express.static(clientBuildPath));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
// FIX: Explicitly type `req` and `res` to match Express's RequestHandler type.
// Relying on inference as explicit types caused issues.
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});