import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from "../../assets/images/login/login.svg"
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="mr-12 w-1/2">
                <img src={loginImage} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                   <form onSubmit={handleSignUp} >
                   <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                   <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Sign Up"  className="btn bg-orange-500 border-0 hover:bg-orange-700"/>
                    </div>
                   </form>
                   <p className='text-center'>Already have an account? <Link to="/login" className="text-orange-500 font-semibold" >Sign in</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;