import React from 'react';
import Slider from './Slider';
import AllProducts from '../AllProducts';
import ReactTab from '../../Components/ReactTab';
import NavSearch from '../../Components/NavSearch';
import FreeShopping from './FreeShopping';
import NewProduct from '../../Share/NewProduct';

const Home = () => {
    return (
        <div>
            
            <NavSearch></NavSearch>
            
            <Slider></Slider>
            <ReactTab></ReactTab>
            <FreeShopping></FreeShopping>
            <NewProduct></NewProduct>
        </div>
    );
};

export default Home;