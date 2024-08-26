import React from 'react';
import { Element } from 'react-scroll';

const Section = ({ id, children, className }) => {
  return (
    <Element name={id} className={`${className}`}>
      {children}
    </Element>
  );
};

export default Section;
