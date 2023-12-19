import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../router'

const AppRouter = () => {
    const routes = localStorage.getItem('ID') === null ? publicRoutes : privateRoutes

    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    Component={route.component}
                    path={route.path}
                    exact={route.path}
                    key={route.path}
                />
            ))}
        </Routes>
    )
}

export default AppRouter
