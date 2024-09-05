import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import image1 from '../../assets/images/testimoni-1.png'

import { FaStar } from "react-icons/fa6";

import { list_testimoni } from '../../constans/constans';


const Testimonials = () => {
    return (
        <div className='flex flex-col gap-6 py-10'>
            <div className='testimonials-title text-3xl font-bold text-primary text-center pb-7'>
                Testimoni
            </div>
            <Swiper
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 5,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },

                }}
                modules={[Navigation]}
                className="mySwiper h-96 w-11/12">
                {list_testimoni.map((list, index) => (
                    <SwiperSlide className='pt-3'>
                        <div class="bg-white drop-shadow-lg rounded-3xl flex flex-row items-center mt-2 mx-2 p-8 h-80 overflow-hidden">
                            <img class="max-w-44 rounded-xl" src={list.image} alt="Sunset in the mountains" />
                            <div className='px-6 py-4'>
                                <div class="pb-3">
                                    <div class="font-bold text-xl mb-4">{list.title}</div>
                                    <p class="text-base leading-4 mb-3">
                                        {list.describe}
                                    </p>
                                    <div className='icon flex flex-row justify-start'>
                                        {Array.from({ length: list.ranking }, (_, i) => (
                                            <FaStar key={i} className='text-yellow-400' />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold text-xl pb-3">{list.name}</div>
                                    <p class="text-base mb-3">
                                        {list.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Testimonials;
