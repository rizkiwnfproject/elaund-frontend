import React from 'react';
import Button from './Button';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-600">
                    ELAUND
                </div>

                {/* Links To Another Page*/}
                <div className="hidden md:flex space-x-8">
                    <Link to="homepage" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Homepage
                    </Link>
                    <Link to="mainfeature" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Main Feature
                    </Link>
                    <Link to="benefit" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Benefit
                    </Link>
                    <Link to="testimoni" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Testimoni
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Contact
                    </Link>
                </div>
                {/* Login Button */}
                <div>
                    <Button className="bg-blue-600 px-6 py-3 text-white rounded-3xl">
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
