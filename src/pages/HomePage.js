import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Home from './section/Home';
import Feature from './section/Feature';
import Benefit from './section/Benefit';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <main className=" py-8">
        <Section id="home" className='container px-7 md:px-0 mx-auto mt-2 md:mt-16 mb-44 h-full'>
          <Home />
        </Section>
        <Section id="feature" className='mb-24 sm:mb-44 h-full'>
          <Feature />
        </Section>
        <Section id="benefit" className='container px-7 md:px-0 mx-auto h-full'>
          <Benefit />
        </Section>

      </main>
    </div>
  );
};

export default Homepage;
