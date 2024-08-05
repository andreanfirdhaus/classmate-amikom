import Layout from "@/layout/layout"
import Classmates from "./pages/Classmates.jsx";
import Graduated from "./pages/Graduated.jsx";
import PageNotFound from "@/layout/error-client";
import "./global.css";

export const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <PageNotFound />,
        children: [
            {
                path: "/",
                element: <Classmates />,
            },
            {
                path: "/graduated",
                element: <Graduated />,
            },
        ],
    },
];
