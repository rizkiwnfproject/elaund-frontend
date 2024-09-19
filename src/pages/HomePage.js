import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Home from './section/Home';
import Feature from './section/Feature';
import Benefit from './section/Benefit';
import Footer from './section/Footer';
import Testimonials from './section/Testimonials';

const Homepage = () => {
  return (
    <div className='overflow-x-hidden '>
      {/* Navbar */}
      <Navbar />
      <main className="">
        <Section id="homepage" className='container px-7 md:px-0 mx-auto pt-28 md:pt-44 pb-9 md:pb-44 '>
          <Home />
        </Section>
        <Section id="main_feature" className='py-5 min-h-screen'>
          <Feature />
        </Section>
        <Section id="benefit" className='container px-7 md:px-0 mx-auto min-h-screen'>
          <Benefit />
        </Section>
        <Section id="testimonials" className=''>
          <Testimonials />
        </Section>
        <Section id="contact" className='md:px-0 w-full pt-64'>
          <Footer />
        </Section>

      </main>
    </div>
  );
};

export default Homepage;
