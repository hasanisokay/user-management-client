import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    const {googleSignIN}= useContext(AuthContext)
    const handleGoogleSignIn=()=>{
        googleSignIN()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'> <p>Continue with... </p>
                <button className="btn bg-blue " onClick={handleGoogleSignIn}>
                   <FaGoogle/>oogle 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;