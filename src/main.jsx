import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import AuthProvider from "./Provider/AuthProvider";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Pages from "./Pages/Pages/Pages";
import Contact from "./Pages/Contact/Contact";
import Gallery from "./Pages/Gallery/Gallery";
import BlogDetail from "./Pages/Blog/BlogDetail";
import Events from "./Pages/Event/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/blogggi", 
        element:<BlogDetail/>
      },
      {
        path: '/pages',
        element: <Pages></Pages>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/gallery',
        element:<Gallery/>
        
      },
      {
        path: '/events',
        element: <Events />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
