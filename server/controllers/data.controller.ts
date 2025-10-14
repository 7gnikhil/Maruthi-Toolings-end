import { Request, Response } from 'express';
import { Product, Service, CareerPost, Update } from '../../types';
import ProductModel from '../models/product.model';
import ServiceModel from '../models/service.model';
import CareerModel from '../models/career.model';
import UpdateModel from '../models/update.model';

type ProductCategory = 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';

/**
 * This file contains Express controller handlers. Each function handles
 * a specific API route, gets data from the model, and sends a JSON response.
 */

const getProductsController = async (category: ProductCategory): Promise<Product[]> => {
    const query = category === 'All' ? {} : { category };
    const products = await ProductModel.find(query);
    return products;
};

const getServicesController = async (): Promise<Service[]> => {
    const services = await ServiceModel.find();
    return services;
};

const getCareersController = async (): Promise<CareerPost[]> => {
    const careers = await CareerModel.find();
    return careers;
};

const getUpdatesController = async (): Promise<Update[]> => {
    const updates = await UpdateModel.find();
    return updates;
};


// --- Express Route Handlers ---

export const getProductsHandler = async (req: Request, res: Response) => {
    try {
        const category = (req.query.category as ProductCategory) || 'All';
        const products = await getProductsController(category);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

export const getServicesHandler = async (req: Request, res: Response) => {
    try {
        const services = await getServicesController();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services' });
    }
};

export const getCareersHandler = async (req: Request, res: Response) => {
    try {
        const careers = await getCareersController();
        res.json(careers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching careers' });
    }
};

export const getUpdatesHandler = async (req: Request, res: Response) => {
    try {
        const updates = await getUpdatesController();
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching updates' });
    }
};