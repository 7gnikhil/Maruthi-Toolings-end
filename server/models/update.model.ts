import { Update } from '../../types';

// In a true MVC backend, this file would define a Mongoose Schema and export a Model.
// For this simulation, it acts as the data source for company updates.

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
