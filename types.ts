import React from 'react';

export type Page = 
  | 'Home'
  | 'Products'
  | 'End Components'
  | 'Tools & Machines'
  | 'About Us'
  | 'Contact Us'
  | 'Careers';

export interface Product {
  _id?: string;
  name: string;
  category: 'End Component' | 'Tools/Machines';
  description: string;
  imageUrl: string;
  updatedAt: Date;
}

export interface CareerPost {
  _id?: string;
  position: string;
  description: string;
  location: string;
}

export interface Update {
    _id?: string;
    title: string;
    description: string;
    date: string;
}

export interface Inquiry {
  _id?: string;
  name?: string;
  email: string;
  subject?: string;
  message: string;
  createdAt?: Date;
}

// FIX: Added Service interface to resolve import errors in pages/Services.tsx and server/models/service.model.ts.
export interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string;
}
