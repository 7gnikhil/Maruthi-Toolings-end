import { Product, Service, CareerPost, Update } from '../types';
import {
    getProductsController,
    getServicesController,
    getCareersController,
    getUpdatesController
} from '../server/controllers/data.controller';

type ProductCategory = 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';

/**
 * This file acts as the API client for the frontend View.
 * It calls the async "controller" functions to get data from the simulated backend.
 */

export const getProducts = async (category: ProductCategory): Promise<Product[]> => {
    // In a real app, this would be: return fetch(`/api/products?category=${category}`).then(res => res.json());
    const data = await getProductsController(category);
    return data;
};

export const getServices = async (): Promise<Service[]> => {
    const data = await getServicesController();
    return data;
};

export const getCareers = async (): Promise<CareerPost[]> => {
    const data = await getCareersController();
    return data;
};

export const getUpdates = async (): Promise<Update[]> => {
    const data = await getUpdatesController();
    return data;
};
