import React from 'react';

const FeatureField = ({ children, className, titleText, fieldText, textName }) => {
  return (
    <div className={`flex flex-col gap-2 ${textName}`}>
      {children}
    </div>
  );
};

export default FeatureField;
