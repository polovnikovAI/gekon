import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from '../router';

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route => 
                <Route
                    Component={route.component}
                    path={route.path}
                    exact={route.path}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;