import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorLottieFile from "../../assets/jsonLottieFiles/error.json"
import Lottie from "lottie-react";
const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className='text-center overflow-hidden'>
            <Lottie animationData={errorLottieFile} className='w-[500px] mx-auto'/>
            <h1 className='text-red-500 text-xl font-bold'>{status}</h1>
            <h1 className='text-xl font-bold mb-4'> {error ?.message}</h1>
            <Link to="/" className='btn text-xl font-semibold rounded'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;