import { motion } from "framer-motion";
import img1 from "../../assets/img/img2.jpg";

const FreeShopping = () => {
  return (
    <div className="w-full py-2 px-1 relative">
      <motion.img
        src={img1}
        className="w-full h-[250px] md:h-[400px] lg:h-[600px] object-cover rounded-xl"
        alt="Free Shipping Banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="absolute md:top-1/2 top-10 left-3 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-2xl md:text-3xl font-bold px-4 py-2 rounded-lg text-black ">
          All Bangladesh Free Shipping
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold"
        >
          Buy Now!
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FreeShopping;
