import React from 'react';
import FeatureList from '../../components/FeatureList';
import FeatureField from '../../components/FeatureField';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { features } from '../../constans/constans';

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

    return (
        <div ref={ref} className='flex flex-col gap-6'>
            <div className='feature-title text-3xl font-bold text-primary text-center'>
                Fitur Utama
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
                        <img src={feature.img} alt="Laundry" className={`w-32 h-32 rounded-full ${feature.order}`} />
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
