
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
  name: string;
  category: 'Completed' | 'Ongoing' | 'Tools/Machines';
  description: string;
  imageUrl: string;
  updatedAt: Date;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface CareerPost {
  position: string;
  description: string;
  location: string;
}

export interface Update {
    title: string;
    description: string;
    date: string;
}
