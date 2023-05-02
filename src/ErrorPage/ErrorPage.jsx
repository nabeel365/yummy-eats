import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import './ErrorPage.css'

const ErrorPage = () => {
    return (
        <div className='error'>

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">404 Not Found</h1>
                <p className="text-lg text-gray-800 mb-4">
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
    );
};

export default ErrorPage;