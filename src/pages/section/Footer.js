import React from 'react';
import Logo from '../../components/Logo';
import { footer_first_sec_col, footer_second_col, footer_third_col } from '../../constans/constans';

const Footer = () => {

    return (
        <div className='bg-soft-blue rounded-t-3xl'>
            <div className='py-4'>
                <div className='container mx-auto flex flex-col sm:flex-row flex-wrap justify-around sm:justify-between py-8 gap-5 lg:gap-24 px-4 sm:px-0'>
                    <div className='first-col flex flex-col gap-3'>
                        <Logo className="w-44" />

                        <div className='flex flex-row gap-6 '>
                            {footer_first_sec_col.map((first_sec, index) => (
                                <a href={first_sec.link} className='p-3 bg-light-blue rounded-full'><first_sec.icon className='w-6 h-6' /></a>
                            ))}
                        </div>
                    </div>
                    <div className='second-col flex flex-col gap-8 '>
                        <div className='title text-primary text-2xl md:text-3xl font-semibold'>
                            Tautan
                        </div>
                        <div className='menu-list flex flex-col gap-3'>
                            {footer_second_col.map((second, index) => (
                                <a href={second.link}>{second.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className='third-col flex flex-col gap-8 w-72 md:w-80 '>
                        <div className='title text-primary text-2xl md:text-3xl font-semibold'>
                            Informasi
                        </div>
                        <div className='menu-list flex flex-col gap-4'>
                            {footer_third_col.map((third, index) => (
                                <p className={third.color}>{third.field}</p>
                            ))}
                        </div>
                    </div>
                    <div className='fourth-col flex flex-col gap-3'>
                        <div className='title text-primary text-2xl md:text-3xl font-semibold'>
                            Kantor Kami
                        </div>
                        <div className=''>
                            <iframe className='max-w-full h-48' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.691977092162!2d112.79117541061387!3d-7.275847092700976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sen!2sid!4v1725632480345!5m2!1sen!2sid" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <p className='text-center font-semibold text-primary'>ELaund © 2024. All Right Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
