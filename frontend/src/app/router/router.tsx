import { createBrowserRouter } from "react-router";
import ErrorPage from "../../pages/error/error-page";
import Layout from "../layout/layout";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <Layout/>,
        children: [
            {
                
            }
        ]
    }
])