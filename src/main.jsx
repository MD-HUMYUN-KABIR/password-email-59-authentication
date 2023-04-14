import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/LayOut/Main';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import Register from './Components/Register/Register';
import RegisterRBS from './Components/RegisterRBS/RegisterRBS';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/register-rbs',
        element:<RegisterRBS></RegisterRBS>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
