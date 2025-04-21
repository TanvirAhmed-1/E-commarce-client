import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LoadingPage from "../Pages/Home/LoadingPage";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import UploadProduct from "../Dashbord/UploadProduct";


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
        ]
    }
])


export default Router;