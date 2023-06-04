import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from "react-icons/fa"
import { AuthContext } from '../../../Providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {

            })
            .catch(error => { console.log(error) })
    }
    const navOptions = <>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/allTask"}>All Tasks</Link></li>
        <li><Link to={"/addTask"}>Add a Task</Link></li>
        <li><Link to={"/about"}>About Us</Link></li>
    </>

    return (
        <div className="navbar mb-8 bg-zinc-600 text-white shadow-lg rounded-b-sm shadow-slate-700 ">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact text-white  dropdown-content mt-3 p-2 shadow-2xl bg-zinc-600 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to={"/"} className="h-10 w-20  normal-case text-xl">
                    <FaUsers className='h-full w-full text-orange-500' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login">
                    <button className='btn btn-outline text-orange-500  hover:bg-orange-600 hover:border-0'>Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;