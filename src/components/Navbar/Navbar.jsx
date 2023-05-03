import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {


    return (
        <div>













            {/* ..................................................... */}



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
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                           
                            <li><a>Logout</a></li>
                            <li><Link>Home</Link> </li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/login">Log In</Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;