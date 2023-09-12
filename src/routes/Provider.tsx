import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../layouts/errors/Errors";
import BgHero from "../pages/Hero/Hero";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BgHero />,
        errorElement: <ErrorPage />
    }
]);
