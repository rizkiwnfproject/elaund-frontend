import React from 'react';

const FeatureField = ({ children, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {children}
    </div>
  );
};

export default FeatureField;
