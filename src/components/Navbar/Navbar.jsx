import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {



    const { logOut, user, setUser, } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        setUser(null)
            .then(result => { })
            .catch(error => console.log(error));
    }


    return (
        <div>


            <div className="navbar bg-yellow-500">
                <div className="flex-1">


                    <a className="btn btn-ghost normal-case text-2xl">Yummy Eats</a>

                </div>
                
                <div className="flex-none gap-2">


                    <button className='w-10 rounded-full avatar '>

                        {user
                            ? <img className='btn btn-circle btn-ghost' title={user.displayName} src={user.photoURL} alt={user.displayName} />
                            : <Link to="/login"> <button className='btn btn-square ' to="/login"> Log In </button> </Link>

                        }


                    </button>

                    <div className="dropdown dropdown-end ">


                        <label tabIndex={0} className="btn btn-ghost btn-circl avatar text-3xl ">

                            <FaBars></FaBars>





                        </label>

                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                            <li>   <button onClick={handleLogOut}>Logout</button> </li>

                            <li><NavLink to="/">Home</NavLink> </li>
                            <li><NavLink to="/blog">Blog</NavLink></li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;