import React from 'react';
import { Link } from 'react-router-dom';

const ChefInfo = ({ chefs, }) => {
    const { id, name, picture, likes, experience } = chefs;
  
    console.log(name);
    return (
        <div className='grid-row-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure ><img className='fluid' src={picture} alt="chefs" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p> <strong> Years of Experience : </strong> {experience} </p>
                    <p> <strong>Likes : </strong> {likes} </p>
                    <div className="card-actions justify-end">
                    <Link to={`/recipes/${id}`}>   <button className="btn btn-warning"> View Recipes</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefInfo;