import { Product, CareerPost, Update, Service } from '../types';

export const MOCK_PRODUCTS_DB: Product[] = [
    { _id: '1', name: 'Automotive 2K Dashboard Housing', category: 'End Component', description: 'A complex, two-shot (2K) mould for a next-gen vehicle dashboard, manufactured with high-grade ABS and TPE.', imageUrl: 'https://images.unsplash.com/photo-1617802122352-c84d7a8a1f2b?q=80&w=1935&auto=format=fit=crop', updatedAt: new Date('2024-09-15') },
    { _id: '2', name: 'Pharma-Grade Syringe Barrel Mould', category: 'End Component', description: 'High-precision 64-cavity mould for manufacturing medical-grade polypropylene syringe barrels.', imageUrl: 'https://cdn.pixabay.com/photo/2017/02/08/15/49/injection-moulding-2049318_1280.jpg', updatedAt: new Date('2024-08-20') },
    { _id: '4', name: 'Haas VF-4SS CNC Machine', category: 'Tools/Machines', description: 'High-performance Vertical Machining Center for rapid and precise mould creation.', imageUrl: 'https://images.unsplash.com/photo-1621293051485-8f49a27b9c6a?q=80&w=1932&auto=format&fit=crop', updatedAt: new Date('2023-01-10') },
    { _id: '5', name: 'Industrial Connector Component', category: 'End Component', description: 'Robust connector part for heavy-duty industrial machinery, made with glass-filled nylon.', imageUrl: 'https://images.unsplash.com/photo-1567121289354-9b5d2a265636?q=80&w=2070&auto=format&fit=crop', updatedAt: new Date('2024-07-05') },
    { _id: '7', name: 'EDM Wire Cutting Machine', category: 'Tools/Machines', description: 'Sodick ALN600G used for intricate details and high-precision cuts in hardened steel moulds.', imageUrl: 'https://images.unsplash.com/photo-1633355444132-690d7975037f?q=80&w=2070&auto=format&fit=crop', updatedAt: new Date('2022-11-20') },
    { _id: '8', name: 'Custom Bottle Cap Mould', category: 'End Component', description: '32-cavity mould for a unique, patented beverage bottle cap design with tamper-evident features.', imageUrl: 'https://cdn.pixabay.com/photo/2021/10/21/14/01/plastic-6729579_1280.jpg', updatedAt: new Date('2024-06-11') },
    { _id: '9', name: 'DMG Mori DMU 50 5-Axis Mill', category: 'Tools/Machines', description: 'Advanced 5-axis simultaneous milling center, perfect for highly complex mould cavities and geometries with a single setup.', imageUrl: 'https://images.unsplash.com/photo-1603298619343-d23e8055108d?q=80&w=1974&auto=format&fit=crop', updatedAt: new Date('2024-10-22') },
    { _id: '10', name: 'Mazak QT-250 CNC Lathe', category: 'Tools/Machines', description: 'High-precision CNC turning center for creating cylindrical mould components, inserts, and ejector pins with exceptional accuracy.', imageUrl: 'https://images.unsplash.com/photo-1595624773810-5041a9f14798?q=80&w=2070&auto=format&fit=crop', updatedAt: new Date('2023-05-18') },
];

export const MOCK_CAREERS_DB: CareerPost[] = [
    { _id: 'c1', position: 'CNC Machinist', description: 'We are looking for an experienced CNC Machinist to operate our Haas and Mazak machines. Must be proficient in G-code and CAM software.', location: 'Hyderabad, India' },
    { _id: 'c2', position: 'Mould Designer', description: 'Seeking a creative and technical Mould Designer with 5+ years of experience in SolidWorks or a similar CAD program for complex injection moulds.', location: 'Hyderabad, India' },
    { _id: 'c3', position: 'Quality Control Inspector', description: 'A detail-oriented individual is needed to perform inspections on finished moulds and plastic components using precision measuring tools.', location: 'Hyderabad, India' },
];

export const MOCK_UPDATES_DB: Update[] = [
    { _id: 'u1', title: 'New High-Strength Polymer Acquired', description: 'We are now using PEEK polymer for high-temperature applications, enhancing component durability.', date: '2024-10-26' },
    { _id: 'u2', title: '5-Axis CNC Machine Added to Workshop', description: 'Our new 5-axis CNC machine allows for more complex geometries and faster production times.', date: '2024-10-22' },
    { _id: 'u3', title: 'Expanded capacity for pharma moulds', description: 'We have successfully expanded our cleanroom facilities to meet the growing demand for medical and pharma-grade moulds.', date: '2024-10-15' },
];

// FIX: Added and exported MOCK_SERVICES_DB. This data was missing, causing an import error in Services.tsx.
export const MOCK_SERVICES_DB: Service[] = [
    {
        _id: 's1',
        title: 'Mould Design & Prototyping',
        description: 'From concept to reality, we provide comprehensive 3D mould design and rapid prototyping services to validate your components before mass production.',
        icon: 'LightBulbIcon',
    },
    {
        _id: 's2',
        title: 'High-Precision CNC Machining',
        description: 'Utilizing our state-of-the-art 5-axis CNC mills and EDM machines, we craft complex mould cavities and cores with sub-micron accuracy.',
        icon: 'WrenchScrewdriverIcon',
    },
    {
        _id: 's3',
        title: '2K & 3K Injection Moulding',
        description: 'Specializing in multi-material moulds (2K & 3K), we enable the creation of sophisticated parts with integrated soft-touch grips, seals, or multiple colors.',
        icon: 'CubeTransparentIcon',
    },
    {
        _id: 's4',
        title: 'Mould Maintenance & Repair',
        description: 'We offer comprehensive maintenance and repair services to extend the life of your tooling, ensuring consistent quality and performance over millions of cycles.',
        icon: 'ShieldCheckIcon',
    },
];
