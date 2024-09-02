import React from 'react';
import myImage from '../../assets/images/home_laundry.jpg';
import FeatureList from '../../components/FeatureList';
import FeatureField from '../../components/FeatureField';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.3, // Delay each feature by 0.3 seconds
            duration: 0.6, // Duration of the animation
        },
    }),
};

const Feature = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animasi hanya terjadi sekali
        threshold: 0.2, // Berapa banyak elemen yang harus terlihat sebelum animasi dimulai (0.2 berarti 20%)
    });

    const features = [
        {
            title: "Put & Take",
            description: "Lagi males dan pingin rebahan? Tapi cucian menggunung di rumah. Haishh, kamu hanya perlu letakkan cucian di rumah dan cukup klik sekali untuk menikmati layanan antar-jemput ELaund.",
            img: myImage,
            alignment: "text-left",
            listClass: "rounded-l-10xl md:rounded-l-full ml-6 md:ml-32 items-start md:items-center",
        },
        {
            title: "Easy Pay",
            description: "Bayar pakai tunai? Transfer? QRIS? Atau bayar nanti aja? Ya bisa semua, Lah. ELaund meyediakan berbagai metode pembayaran yang sangat lengkap.",
            img: myImage,
            alignment: "text-right",
            listClass: "rounded-r-10xl md:rounded-r-full mr-6 md:mr-32 items-end md:items-center",
        },
        {
            title: "Track Your Order",
            description: "Kamu ga perlu kawatir baju ilang, karena transparasi ELaund hanya setipis tisu dengan adanya fitur Tracking Order. Jadi cucianmu aman bersama kami, dan tentunya bersih dan wangi.",
            img: myImage,
            alignment: "text-left",
            listClass: "rounded-l-10xl md:rounded-l-full ml-6 md:ml-32 items-start md:items-center",
        }
    ];

    return (
        <div ref={ref} className='flex flex-col gap-6'>
            <div className='feature-title text-3xl font-bold text-primary text-center'>
                Main Feature
            </div>
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={featureVariants}
                >
                    <FeatureList className={feature.listClass}>
                        <img src={feature.img} alt="Laundry" className='w-32 h-32 rounded-full' />
                        <FeatureField className={feature.alignment}>
                            <div className='font-bold'>
                                {feature.title}
                            </div>
                            <div>
                                {feature.description}
                            </div>
                        </FeatureField>
                    </FeatureList>
                </motion.div>
            ))}
        </div>
    );
};

export default Feature;
