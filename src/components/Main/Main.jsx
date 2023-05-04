import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefInfo from '../ChefInfo/ChefInfo';
import Banner from '../Banner/Banner';

const Main = () => {
    const { id } = useParams();
    const allChefs = useLoaderData();
    console.log(allChefs);

    return (
        <div>

            <Banner></Banner>
<br />
<br />

<h1 className='text-center sm:text-5xl text-amber-300'>Explore Our Chefs</h1>

            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>


                {
                    allChefs.map(chefs => <ChefInfo
                        key={chefs.id}
                        chefs={chefs}
                    ></ChefInfo>)
                }

            </div>
        </div>
    );
};

export default Main;