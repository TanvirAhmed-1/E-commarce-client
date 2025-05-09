import React from 'react';
import Slider from './Slider';
import AllProducts from '../AllProducts';
import ReactTab from '../../Components/ReactTab';
import NavSearch from '../../Components/NavSearch';
import FreeShopping from './FreeShopping';
import NewProduct from '../../Share/NewProduct';
import TopSell from '../../Share/topSell';


const Home = () => {
    return (
        <div>
            
            <NavSearch></NavSearch>
            
            <Slider></Slider>
            <ReactTab></ReactTab>
            <TopSell></TopSell>
            <FreeShopping></FreeShopping>
            <NewProduct></NewProduct>
        </div>
    );
};

export default Home;