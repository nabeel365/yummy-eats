import React from 'react';

const Banner = () => {
    return (
        <div className='sm:flex w-auto'>

            <div className=''>

                <h1 className='text-orange-400 sm:text-5xl text-2xl font-extrabold '>Welcome To Yummy Eats</h1>
                <br />
                <p className='sm:text-3xl'>Yummy Eats is a popular food recipe website that features a diverse range of delicious and easy-to-follow recipes for food lovers of all levels. From quick and simple meals to more complex dishes, Yummy Eats has something for everyone.</p>

            </div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.daburhoney.com/images/recipes-category-banner.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://vaya.in/recipes/wp-content/uploads/2015/07/HomePage_-Banner-1-1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://as2.ftcdn.net/v2/jpg/01/57/28/31/1000_F_157283191_ALJy3vuwlPKVdDtPPCZsPpRk3BksFlwF.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;