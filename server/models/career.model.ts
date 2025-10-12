import { CareerPost } from '../../types';

// In a true MVC backend, this file would define a Mongoose Schema and export a Model.
// For this simulation, it acts as the data source for career posts.

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
