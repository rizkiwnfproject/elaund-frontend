// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { navbar_company } from '../constans/constans';
import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    const handleResize = () => {
        if (window.innerWidth >= 768 && isOpen) {
            setIsOpen(false); // Close mobile menu if in desktop mode
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isOpen]);

    return (
        <nav className={`bg-white fixed top-0 w-full z-50 transition-shadow duration-300 ease-in-out ${isSticky ? 'shadow-sm' : ''}`}>
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                {/* Logo */}
                <a href="#" className="text-2xl font-bold text-primary">
                    <Logo className='w-36' />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navbar_company.map(link => (
                        <Link
                            key={link.name}
                            to={link.section}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="relative group text-gray-700 hover:text-primary cursor-pointer"
                            activeClass="text-primary" activeStyle='text-primary'
                        >
                            {link.name}
                            <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-2"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-primary focus:outline-none">
                        {isOpen ? '' : (
                            <span>&#9776;</span> // Menu Icon
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed top-0 right-0 h-full bg-white transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-3/4 md:w-1/2`}>
                <button onClick={toggleMenu} className="text-primary focus:outline-none absolute top-8 right-5">
                    {isOpen ? (
                        <span>&#x2715;</span> // Close Icon
                    ) : ''}
                </button>
                <div className="flex flex-col space-y-8 mt-20 px-6">
                    {navbar_company.map(link => (
                        <Link
                            key={link.name}
                            to={link.section}
                            smooth={true}
                            duration={500}
                            offset={-120}
                            onClick={toggleMenu}
                            className="relative group text-gray-700 hover:text-primary cursor-pointer"
                            activeClass="text-primary font-bold"
                        >
                            {link.name}
                            <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Overlay Background */}
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-500 opacity-70 z-40 ${isOpen ? 'block' : 'hidden'}`}></div>
        </nav>
    );
};

export default Navbar;
