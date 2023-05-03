import React from 'react';

const RecipesInfo = ({recipes}) => {
    const {id, name, ingredients} = recipes;
    console.log(recipes);

    

    return (
        <div>
            {name}

            {ingredients.map(ingredient => <li>{ingredient}</li>)}


            
        </div>
    );
};

export default RecipesInfo;