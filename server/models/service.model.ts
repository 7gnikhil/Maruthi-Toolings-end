import { Service } from '../../types';

const mongoose = {
    // FIX: The mock Schema constructor now accepts an argument to match its usage.
    Schema: class Schema { constructor(definition: any) {} },
    model: (name: string, schema: any) => ({ name, schema }),
};

// 1. DEFINE THE SCHEMA
const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true }, // Store icon name as a string
});

// 2. SIMULATE THE DATA THAT WOULD BE IN MONGODB
const MOCK_SERVICES_DB: Service[] = [
    { _id: 's1', title: 'Mould Design & Prototyping', description: 'From concept to reality, we use advanced CAD/CAM software to design and prototype precision moulds tailored to your specifications.', icon: 'LightBulbIcon' },
    { _id: 's2', title: 'Injection Mould Manufacturing', description: 'Utilizing state-of-the-art CNC and EDM machines, we manufacture high-quality, durable injection moulds for various industries.', icon: 'WrenchScrewdriverIcon' },
    { _id: 's3', title: 'Component Production', description: 'We offer small to large-scale production runs of plastic components, ensuring consistency and quality in every part.', icon: 'CubeTransparentIcon' },
    { _id: 's4', title: 'Quality Assurance & Testing', description: 'Our rigorous testing processes guarantee that every mould and component meets the highest standards of precision and reliability.', icon: 'ShieldCheckIcon' },
];

// 3. EXPORT A SIMULATED MONGOOSE MODEL
export const ServiceModel = {
  find: async (): Promise<Service[]> => {
    console.log('Simulating Mongoose ServiceModel.find');
    await new Promise(resolve => setTimeout(resolve, 100));
    return MOCK_SERVICES_DB;
  },
};
