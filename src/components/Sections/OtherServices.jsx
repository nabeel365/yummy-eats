import React from 'react';

const OtherServices = () => {
    return (
        <div>
              <div className="bg-gray-100 py-8">
                <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">Other Services</h2>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <h2 className="text-lg font-bold mb-4">Recipe Finder Tool</h2>
                            <p className="text-gray-600">Easily search for recipes based on ingredients, cooking time, and dietary restrictions using our user-friendly recipe finder tool.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <h2 className="text-lg font-bold mb-4">Meal Planning</h2>
                            <p className="text-gray-600">Let us take the stress out of meal planning with our customized meal plans based on your dietary preferences and featuring a variety of delicious and healthy recipes.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <h2 className="text-lg font-bold mb-4">Cooking Classes</h2>
                            <p className="text-gray-600">Join our expert chefs for online cooking classes covering a variety of cuisines and cooking techniques suitable for all skill levels.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <h2 className="text-lg font-bold mb-4">Recipe Submissions</h2>
                            <p className="text-gray-600">Share your favorite recipes with our community by submitting them to our website. We welcome recipe submissions from our users!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;