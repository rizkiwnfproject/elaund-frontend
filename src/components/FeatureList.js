import React from 'react';

const FeatureList = ({ children, className, titleText, fieldText, textName }) => {
  return (
    <div className={`bg-soft-blue flex flex-col sm:flex-row h-full py-10 px-12 gap-4  md:text-2xl ${className}`}>
      {children}
    </div>
  );
};

export default FeatureList;
