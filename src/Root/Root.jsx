import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import NavSearch from '../Components/NavSearch';

const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <NavSearch></NavSearch>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;