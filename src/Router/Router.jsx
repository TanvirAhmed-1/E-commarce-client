import { createBrowserRouter } from "react-router-dom";
import LoadingPage from "../Pages/Home/LoadingPage";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import UploadProduct from "../Dashbord/UploadProduct";
import Root from "../Components/Root/Root";
import YourOrder from "../Order/YourOrder";
import Favorite from "../Order/favorite";
import ProductDetails from "../Components/ProductDetails";


const Router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<LoadingPage></LoadingPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>   
            },
            {
                path:"/productUpdate",
                element:<UploadProduct></UploadProduct>  
            },
            {
                path:"/yourOrder",
                element:<YourOrder></YourOrder>
            },
            {
                path:"/favorite",
                element:<Favorite></Favorite>
            },
            {
                path:"/ProductDetails/:id",
                element:<ProductDetails></ProductDetails>,
                
            },
        ]
    }
])


export default Router;