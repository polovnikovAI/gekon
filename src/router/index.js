import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Profile from "../pages/Profile"

export const privateRoutes = [
    {path: '*', component: Home, exact: true},
    {path: '/gallery', component: Gallery, exact: true},
    {path: '/profile' , component: Profile, exact: true},
]




export const publicRoutes = [

    {path: '*', component: Home, exact: true},
    {path: '/gallery', component: Gallery, exact: true},
    
]
