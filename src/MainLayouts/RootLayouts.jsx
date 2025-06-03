import React from 'react';
import Navbar from '../layouts/Navbar';
import { Outlet } from 'react-router';
import Footer from '../layouts/Footer';

const RootLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;