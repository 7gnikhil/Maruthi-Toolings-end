import { Product, Service, CareerPost, Update } from '../types';
import {
    getProductsController,
    getServicesController,
    getCareersController,
    getUpdatesController
} from '../server/controllers/data.controller';

// Simulate API call delay
const apiDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

type ProductCategory = 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';

/**
 * This file now acts as the API client for the frontend View.
 * It calls the "controller" functions to get data.
 * This maintains a clean separation, and this file could be easily swapped
 * to use fetch() to call a real backend API without changing any other frontend code.
 */

export const getProducts = async (category: ProductCategory): Promise<Product[]> => {
    await apiDelay(500); // Simulate network latency
    const data = getProductsController(category);
    return data;
};

export const getServices = async (): Promise<Service[]> => {
    await apiDelay(500);
    const data = getServicesController();
    return data;
};

export const getCareers = async (): Promise<CareerPost[]> => {
    await apiDelay(500);
    const data = getCareersController();
    return data;
};

export const getUpdates = async (): Promise<Update[]> => {
    await apiDelay(500);
    const data = getUpdatesController();
    return data;
};
