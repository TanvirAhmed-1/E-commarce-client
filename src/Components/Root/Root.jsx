import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import NavSearch from '../NavSearch';

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