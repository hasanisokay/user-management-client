import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {googleSignIN}= useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIN()
        .then(result=>{
            navigate("/")
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