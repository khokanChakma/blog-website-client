import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>
    }
])

export default Router;