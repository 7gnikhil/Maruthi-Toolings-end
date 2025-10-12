import { Product } from '../../types';

// In a true MVC backend, this file would define a Mongoose Schema and export a Model.
// For this simulation, it acts as the data source for products.

export const PRODUCTS: Product[] = [
  {
    name: 'Automotive Dashboard Housing',
    category: 'Completed',
    description: 'A complex multi-part housing for a next-generation vehicle dashboard, manufactured with ABS plastic.',
    imageUrl: 'https://picsum.photos/seed/dashboard/400/300',
    updatedAt: new Date('2024-09-15'),
  },
  {
    name: 'Medical Syringe Barrel Mould',
    category: 'Completed',
    description: 'High-precision 64-cavity mould for manufacturing medical-grade syringe barrels.',
    imageUrl: 'https://picsum.photos/seed/syringe/400/300',
    updatedAt: new Date('2024-08-20'),
  },
  {
    name: 'Consumer Electronics Casing',
    category: 'Ongoing',
    description: 'Development of a sleek, durable casing for a new smart home device. Prototyping phase.',
    imageUrl: 'https://picsum.photos/seed/casing/400/300',
    updatedAt: new Date('2024-10-25'),
  },
  {
    name: 'Haas VF-4SS CNC Machine',
    category: 'Tools/Machines',
    description: 'High-performance Vertical Machining Center for rapid and precise mould creation.',
    imageUrl: 'https://picsum.photos/seed/haas/400/300',
    updatedAt: new Date('2023-01-10'),
  },
   {
    name: 'Industrial Connector Component',
    category: 'Completed',
    description: 'Robust connector part for heavy-duty industrial machinery, made with glass-filled nylon.',
    imageUrl: 'https://picsum.photos/seed/connector/400/300',
    updatedAt: new Date('2024-07-05'),
  },
   {
    name: 'Aerospace Grade Turbine Blade Mould',
    category: 'Ongoing',
    description: 'A cutting-edge mould for creating composite turbine blades. Material testing underway.',
    imageUrl: 'https://picsum.photos/seed/turbine/400/300',
    updatedAt: new Date('2024-10-18'),
  },
   {
    name: 'EDM Wire Cutting Machine',
    category: 'Tools/Machines',
    description: 'Sodick ALN600G used for intricate details and high-precision cuts in hardened steel moulds.',
    imageUrl: 'https://picsum.photos/seed/edm/400/300',
    updatedAt: new Date('2022-11-20'),
  },
   {
    name: 'Custom Bottle Cap Mould',
    category: 'Completed',
    description: '32-cavity mould for a unique, patented beverage bottle cap design with tamper-evident features.',
    imageUrl: 'https://picsum.photos/seed/bottlecap/400/300',
    updatedAt: new Date('2024-06-11'),
  },
];
