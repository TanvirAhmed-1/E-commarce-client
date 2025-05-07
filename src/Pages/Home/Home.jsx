import React from 'react';
import Slider from './Slider';
import AllProducts from '../AllProducts';
import ReactTab from '../../Components/ReactTab';
import NavSearch from '../../Components/NavSearch';
import FreeShopping from './FreeShopping';

const Home = () => {
    return (
        <div>
            
            <NavSearch></NavSearch>
            
            <Slider></Slider>
            <ReactTab></ReactTab>
            <FreeShopping></FreeShopping>
        </div>
    );
};

export default Home;