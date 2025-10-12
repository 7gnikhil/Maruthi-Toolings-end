import React, { useState, useEffect } from 'react';
import { getServices } from '../api/maruthi-toolings.api';
import { Service } from '../types';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setLoading(true);
      getServices().then(data => {
          setServices(data);
          setLoading(false);
      });
  }, []);

  return (
    <div className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-600 mt-2">Comprehensive solutions from design to production.</p>
        </div>

        {loading ? (
            <div className="text-center">Loading services...</div>
        ) : (
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg flex items-start space-x-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
                    <p className="text-gray-600">{service.description}</p>
                </div>
                </div>
            ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default Services;
