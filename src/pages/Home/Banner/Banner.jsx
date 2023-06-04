import React from 'react';
import img1 from "../../../assets/images/banner/1.jpg"
import img2 from "../../../assets/images/banner/2.jpg"
import img3 from "../../../assets/images/banner/3.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative h-[600px] w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="items-center rounded-xl absolute text-white h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-semibold'>Simplify, Centralize, and Optimize</h2>
                        <p>UserHub - Your Ultimate Task Management Solution</p>
                        <div>
                            <button className='btn btn-primary mr-5'>
                                Discover Mode
                            </button>
                            <button className='btn btn-outline btn-secondary'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative h-[600px] w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="items-center rounded-xl absolute text-white h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-semibold'>User Management Perfected</h2>
                        <p>Unleash the Potential with UserHub</p>
                        <div>
                            <button className='btn btn-primary mr-5'>
                                Discover Mode
                            </button>
                            <button className='btn btn-outline btn-secondary'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[600px] w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="items-center rounded-xl absolute text-white h-full flex bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 w-10/12 pl-12'>
                        <h2 className='text-6xl font-semibold'>Efficiency meets Ease</h2>
                        <p>UserHub-Your Gateway to Streamlined Task Management</p>
                        <div>
                            <button className='btn btn-primary mr-5'>
                                Discover Mode
                            </button>
                            <button className='btn btn-outline btn-secondary'>
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn mr-5 btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;