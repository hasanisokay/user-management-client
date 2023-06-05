import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>User Hub </title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;