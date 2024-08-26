import React from 'react';
import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Home from './section/Home';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <main className="container mx-auto px-4 py-8 my-12">
        <Section id="homepage">
          <Home />
        </Section>
      </main>
    </div>
  );
};

export default Homepage;
