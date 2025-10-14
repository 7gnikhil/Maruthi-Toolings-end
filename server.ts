// FIX: Changed import to a namespace import to resolve type conflicts and ensure correct Express types are used.
import * as express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { createInquiryHandler } from './server/controllers/data.controller';
import { connectDB } from './server/config/db';

const startServer = async () => {
  try {
    // Load environment variables from .env file
    dotenv.config();

    // Connect to MongoDB database and wait for it to succeed
    await connectDB();

    const app: express.Express = express();
    const PORT = process.env.PORT || 3000;

    // Middleware
    app.use(cors());
    app.use(express.json());

    // API Routes
    app.post('/api/inquiry', createInquiryHandler);

    // Serve static files from the React app build directory.
    // In a CommonJS environment, __dirname refers to the directory of the current file.
    // After the build, server.js is located in the 'dist' folder, so __dirname will be 'dist'.
    const clientBuildPath = path.join(__dirname, 'client');
    app.use(express.static(clientBuildPath));

    // The "catchall" handler: for any request that doesn't match one above,
    // send back React's index.html file.
    app.get('*', (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(clientBuildPath, 'index.html'));
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();