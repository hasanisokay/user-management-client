import React from 'react';
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-creative";
import SwiperCore, { EffectCreative,  Autoplay } from "swiper";
SwiperCore.use([Autoplay]);


const Banner = () => {
    const swiperParams = {
        // Swiper options here
        autoplay: {
            delay: 2000, // Delay between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
    };

    return (
        <div className=" w-full">
            <Swiper
            loop={true}
            slidesPerView={1}
            {...swiperParams}  
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
                prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                },
                next: {
                    translate: ["100%", 0, 0],
                },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
            >
            <SwiperSlide>
                <div className='relative w-full h-full'>
                    <img src={img1} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                    <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                        <h2 className='lg:text-6xl text-2xl font-semibold'>Simplify, Centralize, and Optimize</h2>
                        <p className='my-4'>UserHub - Your Ultimate Task Management Solution</p>

                        <div>
                            <button className='btn btn-primary mr-5'>
                                Discover More
                            </button>
                            <button className='btn btn-outline btn-secondary'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='relative w-full h-full'>
                    <img src={img2} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                    <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                        <h2 className='lg:text-6xl text-2xl font-semibold'>User Management Perfected</h2>
                        <p className='my-4'>Unleash the Potential with UserHub</p>
                        <div>
                            <button className='btn btn-primary mr-5'>
                                Discover More
                            </button>
                            <button className='btn btn-outline btn-secondary'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>

            </SwiperSlide>

            <SwiperSlide>
                <div className='relative w-full h-full'>
                    <img src={img3} alt="" className='w-full h-56 md:h-72 lg:h-96' />
                    <div className="absolute text-center pt-8 top-0 w-full text-white h-full bg-gradient-to-r from-[#160505] to-[rgba(21,21,21,0)]">
                        <h2 className='lg:text-6xl text-2xl font-semibold'>Efficiency meets Ease</h2>
                        <p className='my-4'>UserHub-Your Gateway to Streamlined Task Management</p>
                        <div>
                            <button className='btn btn-primary mr-5'>
                                Discover More
                            </button>
                            <button className='btn btn-outline btn-secondary'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>

            </SwiperSlide>

        </Swiper>
        </div >
    );
};

export default Banner;