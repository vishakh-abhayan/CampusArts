import { RouterProvider } from "react-router-dom";
import { router } from "./Provider";

function Routes() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default Routes;
