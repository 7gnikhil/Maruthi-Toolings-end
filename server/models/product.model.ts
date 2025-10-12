import { Product } from '../../types';

// This is a placeholder for the Mongoose library. In a real Node.js environment,
// you would import it: `import mongoose from 'mongoose';`
const mongoose = {
    // FIX: The mock Schema constructor now accepts an argument to match its usage.
    Schema: class Schema { constructor(definition: any) {} },
    model: (name: string, schema: any) => ({ name, schema }),
};

// 1. DEFINE THE SCHEMA
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Completed', 'Ongoing', 'Tools/Machines'],
  },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

// 2. SIMULATE THE DATA THAT WOULD BE IN MONGODB
const MOCK_PRODUCTS_DB: Product[] = [
    { _id: '1', name: 'Automotive Dashboard Housing', category: 'Completed', description: 'A complex multi-part housing for a next-generation vehicle dashboard, manufactured with ABS plastic.', imageUrl: 'https://picsum.photos/seed/dashboard/400/300', updatedAt: new Date('2024-09-15') },
    { _id: '2', name: 'Medical Syringe Barrel Mould', category: 'Completed', description: 'High-precision 64-cavity mould for manufacturing medical-grade syringe barrels.', imageUrl: 'https://picsum.photos/seed/syringe/400/300', updatedAt: new Date('2024-08-20') },
    { _id: '3', name: 'Consumer Electronics Casing', category: 'Ongoing', description: 'Development of a sleek, durable casing for a new smart home device. Prototyping phase.', imageUrl: 'https://picsum.photos/seed/casing/400/300', updatedAt: new Date('2024-10-25') },
    { _id: '4', name: 'Haas VF-4SS CNC Machine', category: 'Tools/Machines', description: 'High-performance Vertical Machining Center for rapid and precise mould creation.', imageUrl: 'https://picsum.photos/seed/haas/400/300', updatedAt: new Date('2023-01-10') },
    { _id: '5', name: 'Industrial Connector Component', category: 'Completed', description: 'Robust connector part for heavy-duty industrial machinery, made with glass-filled nylon.', imageUrl: 'https://picsum.photos/seed/connector/400/300', updatedAt: new Date('2024-07-05') },
    { _id: '6', name: 'Aerospace Grade Turbine Blade Mould', category: 'Ongoing', description: 'A cutting-edge mould for creating composite turbine blades. Material testing underway.', imageUrl: 'https://picsum.photos/seed/turbine/400/300', updatedAt: new Date('2024-10-18') },
    { _id: '7', name: 'EDM Wire Cutting Machine', category: 'Tools/Machines', description: 'Sodick ALN600G used for intricate details and high-precision cuts in hardened steel moulds.', imageUrl: 'https://picsum.photos/seed/edm/400/300', updatedAt: new Date('2022-11-20') },
    { _id: '8', name: 'Custom Bottle Cap Mould', category: 'Completed', description: '32-cavity mould for a unique, patented beverage bottle cap design with tamper-evident features.', imageUrl: 'https://picsum.photos/seed/bottlecap/400/300', updatedAt: new Date('2024-06-11') },
];

// 3. EXPORT A SIMULATED MONGOOSE MODEL
// In a real app, this would be: `export default mongoose.model('Product', productSchema);`
export const ProductModel = {
  find: async (query: { category?: string } = {}): Promise<Product[]> => {
    console.log('Simulating Mongoose ProductModel.find with query:', query);
    await new Promise(resolve => setTimeout(resolve, 100)); // Simulate async db call
    if (query.category) {
      return MOCK_PRODUCTS_DB.filter(p => p.category === query.category);
    }
    return MOCK_PRODUCTS_DB;
  },
};
