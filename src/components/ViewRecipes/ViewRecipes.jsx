import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipesInfo from '../RecipesInfo/RecipesInfo';

const ViewRecipes = () => {
    const {id} = useParams();
    const allRecipes = useLoaderData();
    console.log(allRecipes);

    return (
        <div>
            {
                allRecipes.recipes.map(recipes => <RecipesInfo
                key={recipes.id}
                recipes={recipes}                
                ></RecipesInfo>)
            }
        </div>
    );
};

export default ViewRecipes;