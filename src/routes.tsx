import Layout from "@/layout/layout";
import Classmates from "./pages/classmates";
// import Graduated from "./pages/graduated";
import Prodi from "./pages/program";
import Assistant from "./pages/assistant";
import NotFound from "./not-found";
import "./global.css";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Classmates />,
      },
      {
        path: "/graduated",
        element: <NotFound />,
      },
      {
        path: "/prodi",
        element: <Prodi />,
      },
      {
        path: "/assistant",
        element: <Assistant />,
      },
    ],
  },
];
