
import Slider from './Slider';
import ReactTab from '../../Components/ReactTab';
import NavSearch from '../../Components/NavSearch';
import FreeShopping from './FreeShopping';
import NewProduct from '../../Share/NewProduct';
import TopSell from '../../Share/topSell';
import HighLightProducts from '../HighLightproducts';


const Home = () => {
    return (
        <div>
            
            <NavSearch></NavSearch>
            
            <Slider></Slider>
            <ReactTab></ReactTab>
            <TopSell></TopSell>
            <FreeShopping></FreeShopping>
            <NewProduct></NewProduct>
            <HighLightProducts></HighLightProducts>
        </div>
    );
};

export default Home;