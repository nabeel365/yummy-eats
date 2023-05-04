import React from 'react';
import './Banner.css'



const Banner = () => {
   
    return (
        <div className='w-auto'>


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







        </div>
    );
};

export default Banner;