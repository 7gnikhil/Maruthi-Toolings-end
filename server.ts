import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { getProductsHandler, getServicesHandler, getCareersHandler, getUpdatesHandler } from './server/controllers/data.controller';
import { connectDB } from './server/config/db';

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB database
connectDB();

// FIX: __dirname is not available in ES modules, so we define it manually.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/products', getProductsHandler);
app.get('/api/services', getServicesHandler);
app.get('/api/careers', getCareersHandler);
app.get('/api/updates', getUpdatesHandler);

// Serve static files from the React app build directory
const clientBuildPath = path.join(__dirname, 'client');
app.use(express.static(clientBuildPath));

// The "catchall" handler: for any request that doesn't match one above,
// send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});