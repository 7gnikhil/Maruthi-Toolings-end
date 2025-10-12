import { Product, Service, CareerPost, Update } from './types';
import { WrenchScrewdriverIcon, CubeTransparentIcon, LightBulbIcon, ShieldCheckIcon } from './components/icons';


export const NAV_LINKS_LEFT = ['Products', 'Completed Components', 'Ongoing Components', 'Tools & Machines'];
export const NAV_LINKS_RIGHT = ['About Us', 'Services', 'Contact Us', 'Careers'];

export const BANNER_IMAGES = [
  'https://picsum.photos/seed/machine1/1200/400',
  'https://picsum.photos/seed/mould2/1200/400',
  'https://picsum.photos/seed/factory3/1200/400',
  'https://picsum.photos/seed/component4/1200/400',
];

export const UPDATES: Update[] = [
    {
        title: 'New High-Strength Polymer Acquired',
        description: 'We are now using PEEK polymer for high-temperature applications, enhancing component durability.',
        date: '2024-10-26'
    },
    {
        title: '5-Axis CNC Machine Added to Workshop',
        description: 'Our new 5-axis CNC machine allows for more complex geometries and faster production times.',
        date: '2024-10-22'
    },
    {
        title: 'ISO 9001:2015 Certification Renewed',
        description: 'We have successfully renewed our ISO 9001:2015 certification, reaffirming our commitment to quality.',
        date: '2024-10-15'
    }
];

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

export const SERVICES: Service[] = [
  {
    title: 'Mould Design & Prototyping',
    description: 'From concept to reality, we use advanced CAD/CAM software to design and prototype precision moulds tailored to your specifications.',
    icon: LightBulbIcon
  },
  {
    title: 'Injection Mould Manufacturing',
    description: 'Utilizing state-of-the-art CNC and EDM machines, we manufacture high-quality, durable injection moulds for various industries.',
    icon: WrenchScrewdriverIcon
  },
  {
    title: 'Component Production',
    description: 'We offer small to large-scale production runs of plastic components, ensuring consistency and quality in every part.',
    icon: CubeTransparentIcon
  },
  {
    title: 'Quality Assurance & Testing',
    description: 'Our rigorous testing processes guarantee that every mould and component meets the highest standards of precision and reliability.',
    icon: ShieldCheckIcon
  },
];

export const CAREERS: CareerPost[] = [
  {
    position: 'CNC Machinist',
    description: 'We are looking for an experienced CNC Machinist to operate our Haas and Mazak machines. Must be proficient in G-code and CAM software.',
    location: 'Hyderabad, India',
  },
  {
    position: 'Mould Designer',
    description: 'Seeking a creative and technical Mould Designer with 5+ years of experience in SolidWorks or a similar CAD program for complex injection moulds.',
    location: 'Hyderabad, India',
  },
  {
    position: 'Quality Control Inspector',
    description: 'A detail-oriented individual is needed to perform inspections on finished moulds and plastic components using precision measuring tools.',
    location: 'Hyderabad, India',
  },
];