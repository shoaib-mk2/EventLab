import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Speakers from "../pages/Speakers/Speakers";
import Faq from "../pages/Faq/Faq";
import Contact from "../pages/Contact/Contact";
import ConferenceDetails from "../pages/ConferenceDetails/ConferenceDetails";
import Login from "../pages/Login.jsx/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../pages/Routes/PrivateRoute";

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
                element: <PrivateRoute><Speakers></Speakers></PrivateRoute>,
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
                element: <PrivateRoute><ConferenceDetails></ConferenceDetails></PrivateRoute>,
                loader: () => fetch('/conferences.json')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;