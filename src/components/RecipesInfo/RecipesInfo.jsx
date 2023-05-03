import React from 'react';
import './RecipeInfo.css'
import { FaHeart } from 'react-icons/fa';



const RecipesInfo = ({ recipes }) => {
  const { id, name, ingredients, photo, method, rating } = recipes;
  console.log(recipes);



  return (
    <div>

      <div className="card w-full bg-yellow-100 shadow-xl  my-5 items-start">

        <section className='sm:flex items-center'>

          <div>

            <figure className='px-10 pt-10'><img className='object-cover w-64 h-64 max-w-md rounded' src={photo} alt={`${name} Recipe`} /></figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{name}</h2>

            </div>

          </div>


          <div>

          <p className='p-5'> <strong>Ingredients:-</strong> {ingredients.map(ingredient => <p>{ingredient}</p>)}</p>


            <p> <strong>Method:-</strong> {method} </p>

          </div>

        </section>


        <strong className='text-lg p-5'> {rating} </strong>


      </div>


    </div>
  );
};

export default RecipesInfo;