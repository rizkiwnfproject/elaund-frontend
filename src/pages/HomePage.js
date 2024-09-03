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
        <Section id="homepage" className='container px-7 md:px-0 mx-auto mt-28 md:mt-44 mb-9 md:mb-32 min-h-auto md:min-h-full'>
          <Home />
        </Section>
        <Section id="main_feature" className='mb-24 sm:mb-32 min-h-fit'>
          <Feature />
        </Section>
        <Section id="benefit" className='container px-7 md:px-0 mx-auto mb-12 sm:mb-44 min-h-fit'>
          <Benefit />
        </Section>
        <Section id="contact" className='px-7md:px-0 min-h-fit bg-soft-blue rounded-t-3xl w-full'>
          <Footer />
        </Section>

      </main>
    </div>
  );
};

export default Homepage;
