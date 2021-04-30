import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <ContactForm />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
