import React from 'react';
import Logo from '../../components/Logo';
import { footer_first_col, footer_first_sec_col, footer_second_col, footer_third_col } from '../../constans/constans';

const Footer = () => {

    return (
        <div className='py-4'>
            <div className='container mx-auto flex flex-col sm:flex-row justify-around py-8 gap-5 lg:gap-32 px-12 md:px-0'>
                <div className='first-col flex flex-col gap-3'>
                    <Logo className="w-44" />
                    <div className='flex flex-row gap-6 pl-4 font-semibold'>
                        {footer_first_col.map((first, index) => (
                            <a href={first.link}>{first.name}</a>
                        ))}
                    </div>
                    <div className='flex flex-row gap-6 pl-4'>
                        {footer_first_sec_col.map((first_sec, index) => (
                            <a href={first_sec.link} className='p-3 bg-light-blue rounded-full'><first_sec.icon className='w-6 h-6' /></a>
                        ))}
                    </div>
                </div>
                <div className='second-col flex flex-col gap-8 pl-4 md:pl-0'>
                    <div className='title text-primary text-2xl md:text-3xl font-semibold'>
                        Core Link
                    </div>
                    <div className='menu-list flex flex-col gap-3'>
                        {footer_second_col.map((second, index) => (
                            <a href={second.link}>{second.name}</a>
                        ))}
                    </div>
                </div>
                <div className='third-col flex flex-col gap-8 w-auto md:w-80 pl-4 md:pl-0'>
                    <div className='title text-primary text-2xl md:text-3xl font-semibold'>
                        Information
                    </div>
                    <div className='menu-list flex flex-col gap-4'>
                        {footer_third_col.map((third, index) => (
                            <p>{third.field}</p>
                        ))}
                    </div>
                </div>
            </div>
            <p className='text-center font-semibold'>ELaund © 2024. All Right Reserved</p>
        </div>
    );
};

export default Footer;
