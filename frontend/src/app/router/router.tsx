import { createBrowserRouter } from "react-router";
import ErrorPage from "../../pages/error/error-page";
import Layout from "../layout/layout";
import RegisterPage from "../../pages/user/register-page";
import LoginPage from "../../pages/user/login-page";
import SpacesPage from "../../pages/spaces/space-page";
import SpaceDetailPage from "../../pages/spaces/space-detail-page";
import ProfilePage from "../../pages/user/profile-page";
import MyBookingPage from "../../pages/bookings/my-booking-page";
import ManageBookingPage from "../../pages/bookings/manage-booking-page";
import HomePage from "../../pages/home/home-page";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: [
            {
                path:"/",
                element:<HomePage/>
            },
            {
                path:"/register",
                element:<RegisterPage/>
            },
            {
                path:"/login",
                element:<LoginPage/>
            },
            {
                path:"/spaces",
                element:<SpacesPage/>
            },
            {
                path:"/spaces/:id",
                element:<SpaceDetailPage/>
            },
            {
                path:"/profile",
                element:<ProfilePage/>
            },
            {
                path:"/my-bookings",
                element:<MyBookingPage/>
            },
            {
                path:"/manage-bookings",
                element:<ManageBookingPage/>
            },
        ]
    }
])