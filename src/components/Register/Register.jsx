import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {

  const {user, createUser, name, photoURL, updateProfileInfo} = useContext(AuthContext);
  
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value
    console.log(name, email, password, photoURL);

    setError('')

    if(password.length < 6 && password.length !==0){
      // alert('Password Should be 6 characters or more');
      setError('Password Should be 6 characters or more');
      return;
    }

    //  .................................... ...............................
    // this works only when required is removed from password input
    //  .................................... ...............................

    if(email.length == 0  || password.length == 0 ){
      setError('Email or Password field can not be empty')
      return;

    }

    createUser(email, password, name, photoURL)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfileInfo(result.user, name, photoURL);

        form.reset();

      })
      .catch(error => {
        console.log(error)
      })
  };


  

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name='name'
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name='password'
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoURL"
              type="text"
              name='photoURL'
              placeholder="Photo URL"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <br />
<h1 className='bg-red-500 font-semibold'> {error} </h1>

          <br />
          <p>Already have an account ? <Link className='text-warning' to="/login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
