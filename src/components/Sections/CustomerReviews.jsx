import React from 'react';

const CustomerReviews = () => {
    return (
        <div>
             <div className="bg-gray-100 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-8 text-yellow-500">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <p className="text-gray-600 mb-4">"I love this website! The recipe finder tool is amazing and has helped me discover so many new recipes."</p>
                            <p className="text-gray-800 font-bold">- Sarah R.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <p className="text-gray-600 mb-4">"The meal planning feature has been a game-changer for me. I no longer stress about what to cook for dinner every night!"</p>
                            <p className="text-gray-800 font-bold">- James D.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg px-6 py-8">
                            <p className="text-gray-600 mb-4">"I submitted one of my favorite recipes to this website and it was featured on the homepage! I'm so thrilled to have my recipe shared with others."</p>
                            <p className="text-gray-800 font-bold">- Maria L.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;