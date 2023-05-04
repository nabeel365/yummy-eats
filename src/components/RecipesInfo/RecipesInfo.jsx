import React, { useState } from 'react';
import './RecipeInfo.css'
import { FaHeart } from 'react-icons/fa';
// import { ToastContainer, toast } from "react-toastify";
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
  <button className='btn btn-warning m-3' onClick= {() => {notify() ; handleClick()} } disabled={isDisabled}> Add to Favourite</button>
  <Toaster />
</div>


        <strong className='text-lg p-5'> {rating} </strong>


      </div>

    </div>
  );
};

export default RecipesInfo;