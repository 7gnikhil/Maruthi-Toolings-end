import mongoose, { Schema } from 'mongoose';
import { Product } from '../../types';

const productSchema: Schema = new Schema({
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

export default mongoose.model<Product>('Product', productSchema);
