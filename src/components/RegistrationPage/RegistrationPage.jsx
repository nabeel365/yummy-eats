import React, { useState } from 'react';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the form data to the server
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
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="photoUrl">
              Photo URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoUrl"
              type="text"
              placeholder="Photo URL"
              value={photoUrl}
              onChange={(event) => setPhotoUrl(event.target.value)}
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
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage
