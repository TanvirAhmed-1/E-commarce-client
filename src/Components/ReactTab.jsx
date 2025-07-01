import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import useProduct from "../Hook/useProduct";
import ProductMap from "../Hook/ProductMap";
import LoadingPage from "../Pages/Home/LoadingPage";
import img1 from "../../src/assets/img/iphon.webp";
import img2 from "../../src/assets/img/img8.webp";
import img3 from "../../src/assets/img/img4.jpg";
import img4 from "../../src/assets/img/img9.jpg";
import img5 from "../../src/assets/img/img6.webp";
import img6 from "../../src/assets/img/download.jpg";

const ReactTab = () => {
  const [products, loading] = useProduct();

  const phones = products.filter((v) => v.category === "Phone");
  const Electronic = products.filter((v) => v.category === "Electronic");
  const Fauchon = products.filter((v) => v.category === "Fauchon");
  const Cosmetic = products.filter((v) => v.category === "Cosmetic");
  const Others = products.filter((v) => v.category === "Others");
  const woManCollection = [...Fauchon, ...Cosmetic];
  console.log("all products", woManCollection, products);

  const [tabIndex, setTabIndex] = useState(0);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-2xl pt-10  md:text-start text-center font-semibold text-black">
          Find Your Products
        </h1>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className=" lg:w-10/12 mx-auto grid md:grid-cols-6 grid-cols-3 md:py-20 py-10 justify-center items-center gap-4">
          <Tab className="hidden"></Tab>
          <Tab>
            <div className="grid justify-center items-center">
              <div className="bg-gray-300 rounded-full p-[2px]">
                <img
                  src={img1}
                  className="w-20 h-20 rounded-full object-center"
                  alt=""
                  srcset=""
                />
              </div>
              <p className="text-black text-center text-lg font-semibold ">
                Phones
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="grid justify-center items-center">
              <div className="bg-gray-300 rounded-full p-[2px]">
                <img
                  src={img3}
                  className="w-20 h-20 rounded-full object-center"
                  alt=""
                  srcset=""
                />
              </div>
              <p className="text-black text-center text-lg font-semibold ">
                Electronic
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="grid justify-center items-center">
              <div className="bg-gray-300 rounded-full p-[2px]">
                <img
                  src={img2}
                  className="w-20 h-20 rounded-full"
                  alt=""
                  srcset=""
                />
              </div>
              <p className="text-black text-center text-lg font-semibold ">
                Fashion
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="grid justify-center items-center">
              <div className="bg-gray-300 rounded-full p-[2px]">
                <img
                  src={img4}
                  className="w-20 h-20 rounded-full"
                  alt=""
                  srcset=""
                />
              </div>
              <p className="text-black text-center text-lg font-semibold ">
                Cosmetic
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="grid justify-center items-center">
              <div className="bg-gray-300 rounded-full p-[2px]">
                <img
                  src={img5}
                  className="w-20 h-20 rounded-full"
                  alt=""
                  srcset=""
                />
              </div>
              <p className="text-black text-center text-lg font-semibold ">
                Others
              </p>
            </div>
          </Tab>
          <Tab>
            <div className="grid justify-center items-center">
              <div className="bg-gray-300 rounded-full p-[2px]">
                <img
                  src={img6}
                  className="w-20 h-20 rounded-full"
                  alt=""
                  srcset=""
                />
              </div>
              <p className="text-black text-center text-lg font-semibold ">
                women{" "}
              </p>
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
