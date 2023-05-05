import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './ErrorPage.css'

const ErrorPage = () => {
    return (

        <div>

            <div className='hero sm:min-h-screen' style={{ backgroundImage: `url("https://i.pinimg.com/736x/23/73/6e/23736e5af84855ef8458126d8775732b---pages-page-design.jpg")` }}>

                <div className="min-h-screen bg-transparent flex flex-col justify-center items-center">
                    <h1 className="sm:text-9xl font-bold text-red-600 mb-4">404 Not Found</h1>
                    <p className="sm:text-3xl text-white mb-4">
                        Oops! The page you're looking for was not found. We apologize for the inconvenience.
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-200 ease-in-out"
                    >
                        <FontAwesomeIcon icon={faHome} className="mr-2" />
                        Go back to home
                    </Link>
                </div>

            </div>


        </div>

    );
};

export default ErrorPage;