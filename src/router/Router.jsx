import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Faq from "../pages/Faq/Faq";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/speakers",
                element: <Speakers></Speakers>
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ]
    }
]);

export default router;