import { Update } from '../../types';

const mongoose = {
    // FIX: The mock Schema constructor now accepts an argument to match its usage.
    Schema: class Schema { constructor(definition: any) {} },
    model: (name: string, schema: any) => ({ name, schema }),
};

// 1. DEFINE THE SCHEMA
const updateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
});

// 2. SIMULATE THE DATA THAT WOULD BE IN MONGODB
const MOCK_UPDATES_DB: Update[] = [
    { _id: 'u1', title: 'New High-Strength Polymer Acquired', description: 'We are now using PEEK polymer for high-temperature applications, enhancing component durability.', date: '2024-10-26' },
    { _id: 'u2', title: '5-Axis CNC Machine Added to Workshop', description: 'Our new 5-axis CNC machine allows for more complex geometries and faster production times.', date: '2024-10-22' },
    { _id: 'u3', title: 'ISO 9001:2015 Certification Renewed', description: 'We have successfully renewed our ISO 9001:2015 certification, reaffirming our commitment to quality.', date: '2024-10-15' },
];

// 3. EXPORT A SIMULATED MONGOOSE MODEL
export const UpdateModel = {
    find: async (): Promise<Update[]> => {
        console.log('Simulating Mongoose UpdateModel.find');
        await new Promise(resolve => setTimeout(resolve, 100));
        return MOCK_UPDATES_DB;
    },
};
