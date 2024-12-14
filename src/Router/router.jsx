import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Log/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Components/JobDetails/JobDetails";
import ProtectRouter from "./ProtectRouter";
import JobApply from "../Components/JobApply/JobApply";
import MyApplicationJobs from "../Pages/MyApplicationJobs/MyApplicationJobs";
import AddJob from "../Pages/AddJob/AddJob";
import MyAddedJobs from "../Pages/MyAddedJobs/MyAddedJobs";
import ViewApplications from "../Components/ViewApplications/ViewApplications";

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
            {
                path: '/my-job-application',
                element: <ProtectRouter><MyApplicationJobs></MyApplicationJobs></ProtectRouter>,

            },
            {
                path: '/job-apply/:id',
                element: <ProtectRouter><JobApply></JobApply></ProtectRouter>
            },
            {
                path: '/add-job',
                element: <ProtectRouter><AddJob></AddJob></ProtectRouter>,

            },
            {
                path: '/my-added-job',
                element: <ProtectRouter><MyAddedJobs></MyAddedJobs></ProtectRouter>,

            },
            {
                path: '/viewApplications/:id',
                element: <ProtectRouter><ViewApplications></ViewApplications></ProtectRouter>,
                loader: ({ params }) => fetch(`http://localhost:3000/job-application/job/${params.id}`)

            },

        ]

    }
])

export default router;