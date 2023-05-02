import React from 'react';
import ChefDetails from '../ChefDetails/ChefDetails';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefInfo from '../../ChefInfo/ChefInfo';

const Main = () => {
    const {id} = useParams();
    const allChefs = useLoaderData();
    console.log(allChefs);
   
    return (
        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            {
                allChefs.map(chefs => <ChefInfo
                key={chefs.id}
                chefs={chefs}
                ></ChefInfo>)
            }
        </div>
    );
};

export default Main;