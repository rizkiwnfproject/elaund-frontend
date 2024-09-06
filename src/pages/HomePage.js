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
    <div>
      {/* Navbar */}
      <Navbar />
      <main className="">
        <Section id="homepage" className='container px-7 md:px-0 mx-auto pt-28 md:pt-44 mb-9 md:mb-48 '>
          <Home />
        </Section>
        <Section id="main_feature" className='py-5 min-h-screen'>
          <Feature />
        </Section>
        <Section id="benefit" className='container px-7 md:px-0 mx-auto min-h-screen'>
          <Benefit />
        </Section>
        <Section id="testimonials" className='min-h-screen'>
          <Testimonials />
        </Section>
        <Section id="contact" className='px-7 md:px-0  bg-soft-blue rounded-t-3xl w-full mt-[-8rem] sm:mt-0'>
          <Footer />
        </Section>

      </main>
    </div>
  );
};

export default Homepage;
