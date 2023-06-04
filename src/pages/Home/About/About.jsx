import React from 'react';
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className="text-3xl text-orange-500 font-bold">About Us</h1>
                    <h1 className='text-5xl font-bold'>We are qualified <br />& of experienced <br /> in this field</h1>
                    <p className="">At UserHub, we are dedicated to revolutionizing the way organizations manage their users. With a passion for simplicity, efficiency, and security, we have developed a cutting-edge platform that simplifies the complexities of user management processes.</p>
                    <p className="">At UserHub, we are dedicated to revolutionizing the way organizations manage their users. With a passion for simplicity, efficiency, and security, we have developed a cutting-edge platform that simplifies the complexities of user management processes.</p>
                    <button className="btn  bg-orange-500 border-0 hover:bg-orange-600">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;