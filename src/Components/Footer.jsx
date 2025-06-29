import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Trendy Products BD</h2>
            <p className="text-sm text-gray-400">
              আমরা অফার করি সেরা মানের পণ্য সারা বাংলাদেশ জুড়ে ফ্রি শিপিং সুবিধায়। আমাদের লক্ষ্য বিশ্বস্ততা ও সন্তুষ্টি।
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
              <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
              <a href="#" className="hover:text-blue-600"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/allProducts" className="hover:underline">All Products</Link></li>
              <li><Link to="/yourOrder" className="hover:underline">Your Orders</Link></li>
              <li><Link to="/favorite" className="hover:underline">Favorites</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-3">সাবস্ক্রাইব করুন নতুন অফার ও আপডেট পেতে।</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded bg-white text-black text-sm focus:outline-none"
              />
              <button type="submit" className="bg-green-500 text-white py-2 rounded hover:bg-green-600 text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center border-t border-gray-600 pt-4 pb-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Trendy Products BD. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
