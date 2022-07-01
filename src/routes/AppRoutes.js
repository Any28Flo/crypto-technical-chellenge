import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../helpers/routes';

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.onboarding} element={<h1>Onboarding</h1>} />
            <Route path={routes.register} element={<h1>Register</h1>} />
            <Route path={routes.main} element={<h1>Home page</h1>} />
        </Routes>
    );
}

export default AppRoutes;
