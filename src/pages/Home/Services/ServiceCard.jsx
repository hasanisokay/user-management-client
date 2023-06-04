import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img, price } = service;
    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="mecanic" className="rounded-xl w-full h-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-orange-500 font-semibold'>Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;