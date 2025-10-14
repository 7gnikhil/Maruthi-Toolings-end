import { Product, Service, CareerPost, Update, Inquiry } from '../types';

type ProductCategory = 'All' | 'Completed' | 'Ongoing' | 'Tools/Machines';

/**
 * This file acts as the API client for the frontend View.
 * It makes real HTTP requests to the backend API endpoints.
 */

const handleResponse = async (response: Response) => {
    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json();
};

export const getProducts = async (category: ProductCategory): Promise<Product[]> => {
    const response = await fetch(`/api/products?category=${category}`);
    const data = await handleResponse(response);
    // Convert date strings from JSON back to Date objects
    return data.map((p: Product) => ({ ...p, updatedAt: new Date(p.updatedAt) }));
};

export const getServices = async (): Promise<Service[]> => {
    const response = await fetch(`/api/services`);
    return handleResponse(response);
};

export const getCareers = async (): Promise<CareerPost[]> => {
    const response = await fetch(`/api/careers`);
    return handleResponse(response);
};

export const getUpdates = async (): Promise<Update[]> => {
    const response = await fetch(`/api/updates`);
    return handleResponse(response);
};

export const submitInquiry = async (inquiryData: Partial<Inquiry>): Promise<{ message: string }> => {
    const response = await fetch(`/api/inquiry`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inquiryData),
    });
    return handleResponse(response);
};
