import { Product, Service, CareerPost, Update } from '../../types';
import { ProductModel } from '../models/product.model';
import { ServiceModel } from '../models/service.model';
import { CareerModel } from '../models/career.model';
import { UpdateModel } from '../models/update.model';
import { connectDB } from '../config/db';

type ProductCategory = 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';

/**
 * This file simulates a controller in a Node.js/Express MVC architecture.
 * These functions are now async and use the simulated Mongoose models to fetch data.
 */

// Simulate connecting to the database when the controller is loaded.
connectDB();

export const getProductsController = async (category: ProductCategory): Promise<Product[]> => {
    const query = category === 'All' ? {} : { category };
    // In a real backend, this is how you query the database.
    const products = await ProductModel.find(query);
    return products;
};

export const getServicesController = async (): Promise<Service[]> => {
    const services = await ServiceModel.find();
    return services;
};

export const getCareersController = async (): Promise<CareerPost[]> => {
    const careers = await CareerModel.find();
    return careers;
};

export const getUpdatesController = async (): Promise<Update[]> => {
    const updates = await UpdateModel.find();
    return updates;
};
