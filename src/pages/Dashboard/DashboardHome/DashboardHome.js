import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardHome = () => {
    return (
        <div>
            <h1>Dashboard Home</h1>
            <Outlet />
        </div>
    );
};

export default DashboardHome;