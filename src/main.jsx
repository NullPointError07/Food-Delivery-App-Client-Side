import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AuthProver from "./Components/Authentication/AuthProver.jsx";
import Login from "./Components/Authentication/Login.jsx";
import SignUp from "./Components/Authentication/SignUp.jsx";
import Home from "./Components/Home/Home.jsx";
import RestaurantDetails from "./Components/Home/RestaurantDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantDetails></RestaurantDetails>,
        loader: ({ params }) =>
          fetch(`https://food-delivery-server-phi.vercel.app/${params.id}`),
        // fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProver>
      <RouterProvider router={router} />
    </AuthProver>
  </React.StrictMode>
);
