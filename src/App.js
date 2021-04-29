import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Project />
      <ContactForm />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
