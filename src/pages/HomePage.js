import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Home from './section/Home';
import Feature from './section/Feature';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <main className=" py-8">
        <Section id="home" className='container mx-auto mt-16 mb-44 sm:mt-2 lg:mt-16 h-full'>
          <Home />
        </Section>
        <Section id="feature">
          <Feature />
        </Section>
        
      </main>
    </div>
  );
};

export default Homepage;
