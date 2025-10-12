
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-4">About Maruthi Toolings</h1>
          <p className="text-lg text-gray-600 text-center mb-12">
            Pioneering precision in plastic injection mould manufacturing for over two decades.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img 
              src="https://picsum.photos/seed/teamwork/600/400" 
              alt="Our Team"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                To be the leading provider of high-quality, cost-effective injection moulding solutions. We are committed to innovation, precision engineering, and unparalleled customer service, helping our clients bring their ideas to life with efficiency and reliability.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                To drive industrial progress by setting new benchmarks in manufacturing excellence. We envision a future where our advanced tooling solutions empower industries globally, fostering sustainable growth and technological advancement.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Expertise</h3>
                <p className="text-gray-600">20+ years of industry experience and a highly skilled team.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technology</h3>
                <p className="text-gray-600">State-of-the-art machinery for ultimate precision.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">Quality</h3>
                <p className="text-gray-600">ISO 9001:2015 certified processes and rigorous checks.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
