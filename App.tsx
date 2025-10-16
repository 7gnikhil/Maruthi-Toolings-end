
import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import UpdatesSection from './components/UpdatesSection';
import Footer from './components/Footer';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return (
          <>
            <Banner />
            <UpdatesSection />
            <Products category="End Component" title="Our Flagship Components" />
          </>
        );
      case 'Products':
        return <Products category="All" title="All Products" />;
      case 'End Components':
        return <Products category="End Component" title="End Components" />;
      case 'Tools & Machines':
        return <Products category="Tools/Machines" title="Tools & Machines" />;
      case 'About Us':
        return <AboutUs />;
      case 'Contact Us':
        return <ContactUs />;
      case 'Careers':
        return <Careers />;
      default:
        return (
          <>
            <Banner />
            <UpdatesSection />
          </>
        );
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
