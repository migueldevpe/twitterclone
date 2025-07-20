import { createBrowserRouter } from "react-router-dom";
import Timeline from "./pages/Timeline";
import Postage from "./pages/Postage";
import Default from "./layout/Default";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },

            {
                path: '/post',
                element: <Postage />
            },
        ]
    }
    
])