import React from 'react';

const RecipesInfo = ({recipes}) => {
    const {id, name} = recipes;
    console.log(recipes);

    return (
        <div>
            {name}
        </div>
    );
};

export default RecipesInfo;