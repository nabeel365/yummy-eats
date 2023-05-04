import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Login = () => {

const {user, setUser, googleSignIn, githubSignIn, signIn} = useContext(AuthContext)
   

const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.log(error)
        })
}


    const handleGoogleSignIn = () => {


        // googgle login 

       googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log( error.message);
            })
    }

    // github sign in

    const handleGithubSignIn = () => {
       githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error)
            })
    }

   

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Welcome to our website! We are dedicated to providing you with a wide range of delicious and easy-to-follow recipes for any occasion. From quick weeknight meals to elaborate holiday feasts, our website has something for everyone. To access our full collection of recipes and personalized features, please log in below.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onClick={handleLogin}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-warning">Login</button>
                                </div>

                                <div className='text-center font-bold'>
                                    OR
                                </div>

                                <div className='text-center gap-2 flex'>
                                    <Link className='' onClick={handleGoogleSignIn}> <button className='border rounded'>  Sign In With Google <FaGoogle/> </button> </Link>

                                    <Link className='' onClick={handleGithubSignIn}> <button className='border rounded'>  Sign In With GitHub <FaGithub/>   </button> </Link>
                                    

                                </div>

                                
                                <p>New to our site? Please <Link className='text-warning' to="/register"> Register </Link></p>


                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;