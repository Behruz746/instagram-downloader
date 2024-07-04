import React, { useEffect } from "react";
import { Error, Home, History, PrivacyPolicy } from "./pages/";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./layout/MainRoot";
import "./sass/main.scss";
import getVid from "./service/video";

function App() {
  useEffect(() => {
    getVid();
  }, []);

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/history",
          element: <History />,
        },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
