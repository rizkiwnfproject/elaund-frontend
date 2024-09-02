import React from 'react';
import { Link } from 'react-scroll';
import Logo from './Logo';

const Navbar = () => {
    return (
        <nav className="bg-white">
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <Logo className='w-36'/>

                {/* Links To Another Page*/}
                <div className="hidden md:flex space-x-8">
                    <Link to="homepage" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Home
                    </Link>
                    <Link to="mainfeature" smooth={true} duration={500} className='text-gray-700 hover:text-blue-600 cursor-pointer'>
                        Feature
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
                {/* <div>
                    <Button className="bg-primary px-6 py-3 text-white rounded-3xl font-bold">
                        Login
                    </Button>
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
