import { createBrowserRouter } from "react-router-dom";
import Register from './views/Register.jsx';
import Login from './views/Login.jsx';
import DefaultLayout from "./Components/DefaultLayout.jsx";
import User from './views/User.jsx';
import GuestLayout from "./Components/GuestLayout.jsx";
import Notfound from "./views/Notfound.jsx";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/users',
                element: <User />
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },
    {
        path: '*',
        element: <Notfound />
    }
]);

export default Router;