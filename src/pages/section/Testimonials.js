import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa6";
import { list_testimoni } from '../../constans/constans';

// Import Swiper required modules
import { Navigation, Pagination } from 'swiper/modules';
import './styles.css';


const Testimonials = () => {
    return (
        <div className='flex flex-col gap-6 pt-10 relative px-4'>
            <div className='testimonials-title text-3xl font-bold text-primary text-center pb-7'>
                Testimoni
            </div>
            <Swiper
                navigation={{
                    prevEl: '.button-prev',
                    nextEl: '.button-next',
                }}
                pagination={{
                    clickable: true,
                }}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    384: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper w-full h-[22rem] sm:h-[27rem]"
            >
                {list_testimoni.map((list, index) => (
                    <SwiperSlide key={index} className=''>
                        <div className="bg-white flex flex-row text-sm lg:text-base gap-4 overflow-hidden drop-shadow-lg px-8 h-60 sm:h-80 items-center rounded-3xl">
                            <img className="h-36 w-20 sm:h-56 sm:w-36 object-cover rounded-2xl" src={list.image} alt="Testimoni" />
                            <div className='flex flex-col justify-between gap-2 lg:gap-4'>
                                <div className="flex flex-col gap-4 lg:gap-6">
                                    <div className="font-bold text-sm sm:text-xl capitalize">{list.title}</div>
                                    <p className="text-xs sm:text-sm">
                                        {list.describe}
                                    </p>
                                    <div className='icon flex flex-row gap-2 flex-wrap'>
                                        {Array.from({ length: list.ranking }, (_, i) => (
                                            <FaStar key={i} className='text-yellow-400' />
                                        ))}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-1 lg:gap-2'>
                                    <div className="font-bold ">{list.name}</div>
                                    <p className="">
                                        {list.position}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div class="button-prev absolute bottom-10 left-[30%] xs:left-[37%] sm:left-[41%] md:left-[43%] lg:left-[45%] xl:left-[46%]">
                    <div class="swiper-button-prev bg-primary text-white w-16 flex flex-row justify-center"></div>
                </div>
                <div class="button-next absolute bottom-10 right-[30%] xs:right-[37%] sm:right-[41%] md:right-[43%] lg:right-[45%]  xl:right-[46%]">
                    <div class="swiper-button-next bg-primary text-white w-16 flex flex-row justify-center"></div>
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;
