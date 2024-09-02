import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Home from './section/Home';
import Feature from './section/Feature';
import Benefit from './section/Benefit';
import Footer from './section/Footer';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <main className="">
        <Section id="home" className='container px-7 md:px-0 mx-auto mt-2 md:mt-16 mb-44 h-full'>
          <Home />
        </Section>
        <Section id="feature" className='mb-24 sm:mb-44 h-full'>
          <Feature />
        </Section>
        <Section id="benefit" className='container px-7 md:px-0 mx-auto mb-12 sm:mb-44 h-full'>
          <Benefit />
        </Section>
        <Section id="footer" className='px-7md:px-0 h-full bg-soft-blue rounded-t-3xl w-full'>
          <Footer />
        </Section>

      </main>
    </div>
  );
};

export default Homepage;
