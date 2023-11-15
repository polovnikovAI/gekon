import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

export const publicRoutes = [
    {path: '*', component: Home, exact: true},
    {path: '/gallery', component: Gallery, exact: true},
]
