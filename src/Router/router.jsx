import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Components/JobDetails/JobDetails";
import ProtectRouter from "./ProtectRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>error page</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/job-details/:id',
                element: <ProtectRouter><JobDetails></JobDetails></ProtectRouter>,
                loader: ({ params }) => fetch(`http://localhost:3000/job-details/${params.id}`)
            },
        ]

    }
])

export default router;