import { Request, Response } from 'express';
import { Product, Service, CareerPost, Update } from '../../types';
import ProductModel from '../models/product.model';
import ServiceModel from '../models/service.model';
import CareerModel from '../models/career.model';
import UpdateModel from '../models/update.model';
import InquiryModel from '../models/inquiry.model';

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

// FIX: Use express.Request and express.Response to resolve type conflicts.
export const getProductsHandler = async (req: Request, res: Response) => {
    try {
        const category = (req.query.category as ProductCategory) || 'All';
        const products = await getProductsController(category);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products' });
    }
};

// FIX: Use express.Request and express.Response to resolve type conflicts.
export const getServicesHandler = async (req: Request, res: Response) => {
    try {
        const services = await getServicesController();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching services' });
    }
};

// FIX: Use express.Request and express.Response to resolve type conflicts.
export const getCareersHandler = async (req: Request, res: Response) => {
    try {
        const careers = await getCareersController();
        res.json(careers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching careers' });
    }
};

// FIX: Use express.Request and express.Response to resolve type conflicts.
export const getUpdatesHandler = async (req: Request, res: Response) => {
    try {
        const updates = await getUpdatesController();
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching updates' });
    }
};

// FIX: Use express.Request and express.Response to resolve type conflicts.
export const createInquiryHandler = async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!email || !message) {
            return res.status(400).json({ message: 'Email and message are required fields.' });
        }
        const newInquiry = new InquiryModel({
            name,
            email,
            subject,
            message,
        });
        await newInquiry.save();
        res.status(201).json({ message: 'Inquiry submitted successfully!', inquiry: newInquiry });
    } catch (error) {
        console.error('Error saving inquiry:', error);
        res.status(500).json({ message: 'Error submitting inquiry' });
    }
};