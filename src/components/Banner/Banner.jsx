import React from 'react';
import './Banner.css'



const Banner = () => {
   
    return (
        <div className='w-auto'>

            {/* <div className=''>

                <h1 className='text-orange-400 sm:text-5xl text-2xl font-extrabold '>Welcome To Yummy Eats</h1>
                <br />
                <p className='sm:text-3xl'></p>

            </div> */}

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome To Yummy Eats</h1>
      <p className="mb-5">Yummy Eats is a popular food recipe website that features a diverse range of delicious and easy-to-follow recipes for food lovers of all levels. From quick and simple meals to more complex dishes, Yummy Eats has something for everyone.
      </p>
      <button className="btn btn-warning">Get Started</button>
    </div>
  </div>
</div>

            <br />





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


<br />


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

export default Banner;