import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from '../helpers/routes';
import Home from '../pages/home/Home';
import Register from '../pages/register/Register';
import Onboarding from '../pages/onboarding/Onboarding';

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.onboarding} element={<Onboarding />} />
            <Route path={routes.register} element={<Register />} />
            <Route path={routes.main} element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
