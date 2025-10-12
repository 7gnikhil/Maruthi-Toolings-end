import { CareerPost } from '../../types';

const mongoose = {
    // FIX: The mock Schema constructor now accepts an argument to match its usage.
    Schema: class Schema { constructor(definition: any) {} },
    model: (name: string, schema: any) => ({ name, schema }),
};

// 1. DEFINE THE SCHEMA
const careerSchema = new mongoose.Schema({
    position: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
});

// 2. SIMULATE THE DATA THAT WOULD BE IN MONGODB
const MOCK_CAREERS_DB: CareerPost[] = [
    { _id: 'c1', position: 'CNC Machinist', description: 'We are looking for an experienced CNC Machinist to operate our Haas and Mazak machines. Must be proficient in G-code and CAM software.', location: 'Hyderabad, India' },
    { _id: 'c2', position: 'Mould Designer', description: 'Seeking a creative and technical Mould Designer with 5+ years of experience in SolidWorks or a similar CAD program for complex injection moulds.', location: 'Hyderabad, India' },
    { _id: 'c3', position: 'Quality Control Inspector', description: 'A detail-oriented individual is needed to perform inspections on finished moulds and plastic components using precision measuring tools.', location: 'Hyderabad, India' },
];

// 3. EXPORT A SIMULATED MONGOOSE MODEL
export const CareerModel = {
    find: async (): Promise<CareerPost[]> => {
        console.log('Simulating Mongoose CareerModel.find');
        await new Promise(resolve => setTimeout(resolve, 100));
        return MOCK_CAREERS_DB;
    },
};
