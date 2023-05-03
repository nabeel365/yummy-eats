import React from 'react';
import RecipesInfo from '../RecipesInfo/RecipesInfo';

const Blog = () => {

    return (

        <div className='p-5'>
            <div className='text-center text-xl sm:text-5xl'>
                Some Frequently Asked Questions !
            </div>
            <br />
            <div>
                <strong>1. Tell us the differences between uncontrolled and controlled components. </strong>
                <p>Answer- The main difference between uncontrolled and controlled components are that uncontrolled components can manage their own state internally, without any external intervention whereas controlled components can't.  The state of the controlled component is not managed by another component or piece of code, but for controlled components, their state is managed by some external component or code which is then passed to the necessary state information to the controlled component.   </p>
                <div className="divider"></div>
                <strong>2. How to validate React props using PropTypes ?</strong>
                <p>Answer- PropTypes is a built in library of React that allows users to validate the props of a React component. This is useful in large projects where it is difficult to keep track of all the different props that are being passed down to a component, and to ensure that they are of the correct type. Some examples are PropTypes.array, PropTypes.bool, PropTypes.func etc.</p>


                <div className="divider"></div>
                <strong>3. Tell us the difference between nodejs and express js.</strong>
                <p>Answer- Node.js is a JavaScript runtime that allows users to run JavaScript code outside of a web browser. It provides a platform for building server-side applications using JavaScript.

                    Express.js, on the other hand, is a web application framework for Node.js. It provides a set of tools and features for building web applications and APIs using Node.js.</p>

                <div className="divider"></div>
                <strong>4. What is a custom hook, and why will you create a custom hook?</strong>
                <p>Answer- A custom hook is a function in React that allows users to reuse code between different components. It starts with the word "use" and can be used to encapsulate complex logic that would be otherwise repeated in multiple components. For example we want to fetch data from a API and use it in diiferent components, so a custom hook can be created and be used in different components.</p>
            </div>


        </div>
    );
};

export default Blog;