// src/components/Home.js
import React from 'react';
import myImage from '../../assets/images/home_laundry.jpg';
import Button from '../../components/Button';

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9 items-center'>
            <img src={myImage} alt="Laundry" className='w-full rounded-3xl' />
            <div className='flex flex-col gap-6'>
                <div className='home-title text-3xl font-bold text-blue-600'>
                    ELaund Company
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='col-span-2 flex justify-end'>
                    <Button className='border border-blue-600 rounded-3xl py-2 px-4 font-bold text-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white '>
                        Selengkapnya
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Home;
