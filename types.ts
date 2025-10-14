import React from 'react';

export type Page = 
  | 'Home'
  | 'Products'
  | 'Completed Components'
  | 'Ongoing Components'
  | 'Tools & Machines'
  | 'About Us'
  | 'Services'
  | 'Contact Us'
  | 'Careers';

export interface Product {
  _id?: string;
  name: string;
  category: 'Completed' | 'Ongoing' | 'Tools/Machines';
  description: string;
  imageUrl: string;
  updatedAt: Date;
}

export interface Service {
  _id?: string;
  title: string;
  description: string;
  icon: string; // Changed to string to be database-friendly
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
