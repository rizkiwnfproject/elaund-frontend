import React from 'react';
import myImage from '../../assets/images/benefit.png';
import listImage from '../../assets/images/listIcon.png';

const Benefit = () => {
    const benefits = [
        {
            text: "Rebahan dengan nyaman dan cucian aman bersama kami",
        },
        {
            text: "Pakaian hilang? ELaund garansi ganti baru cuy",
        },
        {
            text: "24/7 Customer Service untuk kamu yang jomblo dan lagi gabut",
        },
        {
            text: "Ga pake lama, sat-set seperti ninja.",
        },

    ];

    return (
        <div className='flex flex-col md:flex-row items-center justify-between'>
            {/* Bagian gambar di sebelah kiri */}
            <div className='flex flex-col gap-4 w-full md:w-6/12'>
                <img src={myImage} alt="benefit" className='w-full rounded-3xl' />
            </div>

            {/* Bagian teks di sebelah kanan */}
            <div className='flex flex-col gap-4 w-full md:w-6/12'>
                <div className='text-primary font-bold text-xl md:text-2xl lg:text-3xl mb-4'>
                    Mahasiswa dan pekerja kantoran yang sibuk merapat nih!
                </div>
                {benefits.map((benefit, index) => (
                    <div key={index} className='flex flex-row gap-3 items-center'>
                        <img src={listImage} alt="List Icon" className='w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16' />
                        <span className='text-lg md:text-xl lg:text-2xl'>
                            {benefit.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Benefit;
