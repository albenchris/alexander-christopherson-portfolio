import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch(currentPage) {
      case 'About': return <About />;
      case 'Projects': return <Portfolio />;
      case 'Contact': return <ContactForm />;
      case 'Résumé': return <Resume />;
    }
  }

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {renderPage(currentPage)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
