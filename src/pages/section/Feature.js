// src/components/Home.js
import React from 'react';
import myImage from '../../assets/images/home_laundry.jpg';
import FeatureList from '../../components/FeatureList';

const Feature = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div className='feature-title text-3xl font-bold text-primary text-center'>
                Main Feature
            </div>
            <FeatureList className="rounded-l-full ml-32">
                <img src={myImage} alt="Laundry" className='w-32 h-32 rounded-full' />
                <div className='text-left flex flex-col gap-4 text-2xl'>
                    <div className='font-bold'>
                        Put & Take
                    </div>
                    <div>
                        Lagi males dan pingin rebahan? Tapi cucian menggunung di rumah. Haishh, kamu hanya perlu letakkan cucian di rumah dan cukup klik sekali untuk menikmati layanan antar-jemput ELaund.
                    </div>
                </div>
            </FeatureList>
            <FeatureList className="rounded-r-full mr-32">
                <img src={myImage} alt="Laundry" className='order-last w-32 h-32 rounded-full' />
                <div className='text-right flex flex-col gap-4 text-2xl'>
                    <div className='font-bold'>
                        Easy Pay
                    </div>
                    <div>
                        Bayar pakai tunai? Transfer? QRIS? Atau bayar nanti aja? Ya bisa semua, Lah. ELaund meyediakan berbagai metode pembayaran yang sangat lengkap.
                    </div>
                </div>
            </FeatureList>
            <FeatureList className="rounded-l-full ml-32">
                <img src={myImage} alt="Laundry" className='w-32 h-32 rounded-full' />
                <div className='text-left flex flex-col gap-4 text-2xl'>
                    <div className='font-bold'>
                        Track Your Order
                    </div>
                    <div>
                        Kamu ga perlu kawatir baju ilang, karena transparasi ELaund hanya setipis tisu dengan adanya fitur Tracking Order. Jadi cucianmu aman bersama kami, dan tentunya bersih dan wangi.
                    </div>
                </div>
            </FeatureList>
        </div>

    );
};

export default Feature;
