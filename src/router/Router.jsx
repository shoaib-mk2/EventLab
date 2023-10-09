import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Faq from "../pages/Faq/Faq";
import Contact from "../pages/Contact/Contact";
import ConferenceDetails from "../pages/ConferenceDetails/ConferenceDetails";

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
                element: <Speakers></Speakers>,
                loader: () => fetch('/conferences.json')
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/conferenceDetails/:id",
                element: <ConferenceDetails></ConferenceDetails>,
                loader: () => fetch('/conferences.json')
            }
        ]
    }
]);

export default router;