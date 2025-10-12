import { Product, Service, CareerPost, Update } from '../../types';
import { PRODUCTS } from '../models/product.model';
import { SERVICES } from '../models/service.model';
import { CAREERS } from '../models/career.model';
import { UPDATES } from '../models/update.model';

type ProductCategory = 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';

/**
 * This file simulates a controller in an MVC architecture.
 * It contains the business logic for handling data requests. In a real backend,
 * these functions would be linked to API routes and would interact with a database via the Models.
 */

export const getProductsController = (category: ProductCategory): Product[] => {
    if (category === 'All') {
        return PRODUCTS;
    }
    return PRODUCTS.filter(p => p.category === category);
};

export const getServicesController = (): Service[] => {
    return SERVICES;
};

export const getCareersController = (): CareerPost[] => {
    return CAREERS;
};

export const getUpdatesController = (): Update[] => {
    return UPDATES;
};
