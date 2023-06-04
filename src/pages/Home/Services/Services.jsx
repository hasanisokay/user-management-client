import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("https://car-doctor-server-wine.vercel.app/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='mt-8'>
            <div className='text-center'>
            <h1 className='text-2xl text-orange-500 font-bold'>Services</h1>
            <h2 className='text-5xl font-bold'>Our Services Area</h2>
            <p>Simplify the process of creating and managing user accounts. <br /> From account creation to password resets, UserHub provides a seamless experience for administrators and users alike. </p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-8'>
            {services.map(service=> <ServiceCard
            service={service}
            key={service._id}
            ></ServiceCard> )}
        </div>
        </div>
    );
};

export default Services;