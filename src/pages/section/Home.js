// src/components/Home.js
import React from 'react';
import myImage from '../../assets/images/home.png';
import Button from '../../components/Button';

const Home = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-9'>
            <img src={myImage} alt="Laundry" className='w-full rounded-3xl' />
            <div className='flex flex-col gap-6'>
                <div className='home-title text-3xl font-bold text-primary'>
                    Laundry Done Right, At Your Doorstep
                </div>
                <p>
                    ELaund adalah aplikasi layanan laundry modern yang menawarkan kemudahan dan kepraktisan bagi kamu yang super sibuk dan sok produktif walaupun hobi hanya rebahan aja. Dengan fitur antar-jemput, ELaund memastikan pakaian kamu bersih tanpa harus meninggalkan rumah. Solusi ideal untuk gaya hidup yang santuy dan sat-set. Menjadi solusi laundry terbaik yang menggabungkan kenyamanan, kecepatan, dan kualitas layanan untuk memenuhi kebutuhan kamu yang ingin jadi wibu. Tingkatkan produktivitas dan serahkan urusan rumah pada kami, "Because Your Time is Too Valuable just for Laundry".</p>
                <div className='col-span-2 flex justify-end'>
                    <Button className='border border-primary rounded-3xl py-2 px-4 font-bold text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white '>
                        Selengkapnya
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default Home;
