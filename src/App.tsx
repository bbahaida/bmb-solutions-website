import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;