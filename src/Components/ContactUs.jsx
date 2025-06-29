import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-10 px-4 md:px-10 lg:px-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-green-600 mb-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-lg space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-600">Get in Touch</h2>
          <p className="text-gray-600">
            Feel free to reach out to us for any inquiries, suggestions, or support. We’d love to hear from you!
          </p>

          <div className="flex items-center gap-4 text-gray-700">
            <FaPhone className="text-green-500 text-xl" />
            <p>01786924911</p>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-green-500 text-xl" />
            <p>tanvirahmed1078@gmail.com</p>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-green-500 text-xl" />
            <p>Dhaka, Bangladesh</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-300 p-6 rounded-xl shadow-lg space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for contacting us!");
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-600">Send a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="input input-bordered w-full bg-gray-50"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="input input-bordered w-full bg-gray-50"
          />

          <textarea
            placeholder="Your Message"
            required
            className="textarea textarea-bordered w-full h-32 bg-gray-50"
          ></textarea>

          <button
            type="submit"
            className="btn bg-green-600 text-white border-none hover:bg-green-700 w-full"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactUs;
