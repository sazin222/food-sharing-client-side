
import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AvailabeFood from "../Pages/AvailabeFood/AvailabeFood";
import AddFood from "../Pages/AddFood/AddFood";
import PrivetRoutes from "./PrivetRoutes";
import SingleFoodDetails from "../Pages/SingleFood/SingleFoodDetails";
import ManageFood from "../Pages/ManageFood/ManageFood";
import MyfoodRequest from "../Pages/MyfoodRequest/MyfoodRequest";
import ManageFoodUpdate from "../Pages/ManageFood/ManageFoodUpdate";
import ManageSingleFood from "../Pages/ManageFood/ManageSingleFood";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
           path:'/availableFoods',
           element: <AvailabeFood></AvailabeFood>
        },
        {
          path:'/fooddetails/:id',
          element : <PrivetRoutes>
            <SingleFoodDetails></SingleFoodDetails>
          </PrivetRoutes>,
           loader:({params})=> fetch(`http://localhost:5000/fooddetails/${params.id}`)
          
        },
        {
          path:'/addFood',
          element: <PrivetRoutes>
            <AddFood></AddFood>
          </PrivetRoutes>
        },
        {
          path:'/manageFood',
          element: <PrivetRoutes>
            <ManageFood></ManageFood>
          </PrivetRoutes>
        },
        {
          path:'/manageFoodUpate/:id',
          element: <PrivetRoutes>
            <ManageFoodUpdate></ManageFoodUpdate>
          </PrivetRoutes>,
           loader:({params})=> fetch(`http://localhost:5000/fooddetails/${params.id}`)
          
        },
        {
          path: '/manageSinglePage/:id',
          element: <PrivetRoutes>
            <ManageSingleFood>
            </ManageSingleFood>
          </PrivetRoutes>
        },
        {
          path:'/foodRequest',
          element: <PrivetRoutes>
            <MyfoodRequest></MyfoodRequest>
          </PrivetRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        }
      ]
    },
  ]);



export default Routes;