import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Main from './components/Main/Main.jsx';
import Blog from './components/Blog/Blog.jsx';
import Login from './components/Login/Login.jsx';
import RegistrationPage from './components/RegistrationPage/RegistrationPage.jsx';
import ChefDetails from './components/ChefDetails/ChefDetails.jsx';
import ViewRecipes from './components/ViewRecipes/ViewRecipes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch(`http://localhost:7000/chefs`),


      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <RegistrationPage></RegistrationPage>
      },
      {
        path: "recipes/:id",
        element: <ViewRecipes></ViewRecipes>,
        loader: ({params}) => fetch(`http://localhost:7000/recipes/${params.id}`)

      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
