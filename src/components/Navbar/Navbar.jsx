import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';


const Navbar = () => {


    const {logOut, user, setUser} = useContext(AuthContext);
    console.log(user);
    const handleLogOut = ()=> {
        logOut();
        setUser({})
        .then(result => {})
        .catch(error => console.log(error));
    }


    return (
        <div>


            <div className="navbar bg-yellow-500">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Yummy Eats</a>
                </div>
                <div className="flex-none gap-2">

                    {/* <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div> */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">

                                { user && <img title={user.displayName} src={user.photoURL}/> }

                                

                                
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                           
                           <button><ActiveLink to="/login" onClick={handleLogOut}> Logout </ActiveLink></button> 
                            <button><ActiveLink to="/">Home</ActiveLink> </button>
                            <button><ActiveLink to="/blog">Blog</ActiveLink></button>
                            <button><ActiveLink to="/login">Log In</ActiveLink></button>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;