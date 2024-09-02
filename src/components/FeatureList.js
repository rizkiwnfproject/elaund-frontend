import React from 'react';

const FeatureList = ({ children, className, titleText, fieldText, textName }) => {
  return (
    <div className={`bg-soft-blue flex flex-row items-center h-full py-10 px-12 gap-10 ${className}`}>
      {children}
      <div className={`${textName}`}>
        <div className='font-bold'>
          {titleText}
        </div>
        <div>
          {fieldText}
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
