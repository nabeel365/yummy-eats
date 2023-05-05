import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

// import LazyLoad from 'react-lazy-load';



const ChefInfo = ({ chefs, }) => {
    const { id, name, picture, likes, experience, bio, recipes } = chefs;

    console.log(name);
    return (
        <div>

            <LazyLoad height={762}>


                <div className='grid-row-3'>


                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className='px-10 pt-10'><img className='img-fluid' src={picture} alt="chefs" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name} </h2>
                            <small> {bio} </small>
                            <div className='flex'>
                                <p> <strong> Experience : </strong> {experience} years</p>
                                <p> <strong>Likes : </strong> {likes} </p>
                                <p> <strong> Recipes:- </strong> {recipes}  </p>

                            </div>
                            <div className="card-actions justify-center">
                                <Link to={`/recipes/${id}`}>   <button className="btn btn-warning">  View Recipes</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>


            </LazyLoad>




        </div>

    );
};

export default ChefInfo;