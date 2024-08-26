import React from 'react';

// Komponen Button
const Button = ({ onClick, children, className, type = 'button' }) => {
    return (
        <button onClick={onClick} className={`${className}`} type={type}>
            {children}
        </button>
    );
};

export default Button;
