import React from 'react';
import Slider from './Slider';
import AllProducts from '../AllProducts';
import ReactTab from '../../Components/ReactTab';
import NavSearch from '../../Components/NavSearch';

const Home = () => {
    return (
        <div>
            
            <NavSearch></NavSearch>
            
            <Slider></Slider>
            <ReactTab></ReactTab>
        </div>
    );
};

export default Home;