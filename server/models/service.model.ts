import { Service } from '../../types';
import { WrenchScrewdriverIcon, CubeTransparentIcon, LightBulbIcon, ShieldCheckIcon } from '../../components/icons';

// This file simulates a data model. In a real backend, you would not store React components.
// This is a necessary compromise to make our simulated frontend MVC structure work.

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
