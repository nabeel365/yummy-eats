import React, { useState } from 'react';
import './RecipeInfo.css'
import toast, { Toaster } from 'react-hot-toast';

 
 

const RecipesInfo = ({ recipes }) => {
  const { id, name, ingredients, photo, method, rating } = recipes;
  console.log(recipes);

  
const notify = () => 
toast.success('Recipe Added To Favourites !', {
  style: {
    border: '1px solid yellow',
    padding: '16px',
    color: 'red',
  },
  iconTheme: {
    primary: 'yellow',
    secondary: 'red',
  },
});

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
  };
  

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

 

<div>
  <button className='btn btn-warning m-3' onClick= {() => {notify() ; handleClick()} } disabled={isDisabled}> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> Add to Favourite</button>
  <Toaster />
</div>


        <strong className='text-lg p-5'> Ratings:-  {rating} </strong>


      </div>

    </div>
  );
};

export default RecipesInfo;