import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LoadingPage from "../Pages/Home/LoadingPage";
import Home from "../Pages/Home/Home";


const Router =createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<LoadingPage></LoadingPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])


export default Router;