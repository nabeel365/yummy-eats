import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Navbar = () => {



    const { logOut, user, setUser,  } = useContext(AuthContext);

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

                   
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full ">

                               {user && <img title={user.displayName} src={user.photoURL} alt={user.displayName} />} 





                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            
                           <li>   <button onClick={handleLogOut}>Logout</button> </li> 

                            <li><NavLink to="/">Home</NavLink> </li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                            <li><NavLink to="/login">Log In</NavLink></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;