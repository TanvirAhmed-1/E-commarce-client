import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import useProduct from "../Hook/useProduct";
import ProductMap from "../Hook/ProductMap";
import LoadingPage from "../Pages/Home/LoadingPage";
import img1 from "../../src/assets/img/iphon.webp"

const ReactTab = () => {
  const [products, loading] = useProduct();

  const phones = products.filter((v) => v.category === "Phone");
  const Electronic = products.filter((v) => v.category === "Electronic");
  const Fauchon = products.filter((v) => v.category === "Fauchon");
  const Cosmetic = products.filter((v) => v.category === "Cosmetic");
  const Others = products.filter((v) => v.category === "Others");
  const woManCollection = [...Fauchon, ...Cosmetic];
  console.log("all products", woManCollection);

  const [tabIndex, setTabIndex] = useState(0);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div>
        <h1 className="text-2xl font-semibold text-black">Browse By Category</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className=" lg:w-10/12 mx-auto grid md:grid-cols-6 grid-cols-3 md:py-20  justify-center items-center gap-4">

          <Tab className="hidden"></Tab>
          <Tab><div className="grid justify-center items-center">
           <div className="bg-gray-300 rounded-full p-2">
           <img src={img1} className="w-20 h-20 rounded-full" alt="" srcset="" />
           </div>
            <p className="text-black text-center text-lg font-semibold ">Phones</p>
            </div></Tab>
          <Tab>
          <div className="grid justify-center items-center">
           <div className="bg-gray-300 rounded-full p-2">
           <img src={img1} className="w-20 h-20 rounded-full" alt="" srcset="" />
           </div>
            <p className="text-black text-center text-lg font-semibold ">Electronic</p>
            </div>
          </Tab>
          <Tab>
          <div className="grid justify-center items-center">
           <div className="bg-gray-300 rounded-full p-2">
           <img src={img1} className="w-20 h-20 rounded-full" alt="" srcset="" />
           </div>
            <p className="text-black text-center text-lg font-semibold ">Fauchon</p>
            </div>
          </Tab>
          <Tab>
          <div className="grid justify-center items-center">
           <div className="bg-gray-300 rounded-full p-2">
           <img src={img1} className="w-20 h-20 rounded-full" alt="" srcset="" />
           </div>
            <p className="text-black text-center text-lg font-semibold ">Cosmetic</p>
            </div>
          </Tab>
          <Tab> 
          <div className="grid justify-center items-center">
           <div className="bg-gray-300 rounded-full p-2">
           <img src={img1} className="w-20 h-20 rounded-full" alt="" srcset="" />
           </div>
            <p className="text-black text-center text-lg font-semibold ">woman </p>
            </div>
          </Tab>
          <Tab>
          <div className="grid justify-center items-center">
           <div className="bg-gray-300 rounded-full p-2">
           <img src={img1} className="w-20 h-20 rounded-full" alt="" srcset="" />
           </div>
            <p className="text-black text-center text-lg font-semibold ">Others</p>
            </div>
          </Tab>
        </TabList>


        <TabPanel>
          <ProductMap category={products} />
        </TabPanel>
        <TabPanel>
          <ProductMap category={phones} />
        </TabPanel>
        <TabPanel>
          <ProductMap category={Electronic} />
        </TabPanel>
        <TabPanel>
          <ProductMap category={Fauchon} />
        </TabPanel>
        <TabPanel>
          <ProductMap category={Cosmetic} /> 
        </TabPanel>
        <TabPanel>
          <ProductMap category={Others} />
        </TabPanel>
        <TabPanel>
          <ProductMap category={woManCollection} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
