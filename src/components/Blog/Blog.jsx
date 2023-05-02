import React from 'react';

const Blog = () => {

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50 p-5 ">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"> <strong>1. Tell us the differences between uncontrolled and controlled components. </strong>
                <p>Answer- </p>
                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"> <strong>2. How to validate React props using PropTypes</strong>
                <p>Answer- </p>


                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"> <strong>3. Tell us the difference between nodejs and express js.</strong>
                <p>Answer- </p>

                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center"> <strong>4. What is a custom hook, and why will you create a custom hook?</strong>
                <p>Answer- </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;