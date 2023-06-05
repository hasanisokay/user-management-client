import React, { useContext } from 'react';
import loginImage from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const fromLocation = location.state?.pathname || "/";
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const email = form.email.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(fromLocation, { replace: true })
                
            })
            .catch(error=>console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
                   <Helmet>
                <title>User Hub | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-12 w-1/2">
                    <img src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogin} >
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
                                <input type="submit" value="Login" className="btn bg-orange-500 border-0 hover:bg-orange-700" />
                            </div>
                        </form>
                        <p className='text-center'>New to User Hub? <Link to="/signup" className="text-orange-500 font-semibold" >Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;