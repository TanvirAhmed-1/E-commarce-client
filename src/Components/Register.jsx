import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import Lottie from "lottie-react";
import registerAnimation from "../assets/Animation - 1745245679887.json";

// profile image upload API
const imgCode = import.meta.env.VITE_IMG_KEY;
const imgURL = `https://api.imgbb.com/1/upload?key=${imgCode}`;

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const fileImg = { image: data.photo[0] };
    try {
      const res = await axios.post(imgURL, fileImg, {
        headers: { "content-type": "multipart/form-data" },
      });
      const image = res.data?.data?.display_url;
      console.log("Uploaded Image:", image);
      console.log("Form Data:", data);

      if (res.data.success) {
        const { name, email, password } = data;
        // TODO: Use this data as needed
      }
    } catch (err) {
      console.error("Image upload failed:", err);
    }
  };

  return (
    <div className="hero min-h-screen bg-gray-200 dark:bg-black flex justify-center items-center">
      <div className="flex justify-center gap-6 items-center w-full md:w-[80%] flex-col lg:flex-row-reverse">
        {/* Lottie Animation */}
        <div className="bg-white rounded-2xl lg:w-[50%] flex-1 flex justify-center items-center p-6">
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="w-72 h-72"
          />
        </div>

        {/* Registration Form */}
        <div className="card bg-white dark:bg-gray-800 shadow-lg p-6 w-full md:w-[50%]">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Register Now!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label text-gray-700 dark:text-white">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="input dark:bg-white bg-gray-200 input-bordered w-full"
              />
              {errors.name && (
                <span className="text-red-400 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="label text-gray-700 dark:text-white">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="input dark:bg-white bg-gray-200 input-bordered w-full"
              />
              {errors.email && (
                <span className="text-red-400 text-sm">Email is required</span>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="label text-gray-700 dark:text-white">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register(
                  "password",
                  { required: true, 
                  pattern: /^[A-Za-z]+$/i,
                  min: 4, max: 15
                 }
                )}
                placeholder="Password"
                className="input dark:bg-white bg-gray-200 text-black input-bordered w-full"
              />
              <div
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[38px] right-6 cursor-pointer"
              >
                {showPass ? (
                  <FaRegEye className="text-xl" />
                ) : (
                  <FaEyeSlash className="text-xl" />
                )}
              </div>
              {errors.password?.type === "required" && (
                <span className="text-red-400 text-sm">
                  Password is required
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-400 text-sm">
                  At least one uppercase letter, one lowercase letter, one
                  special character, and one number{" "}
                </span>
              )}
              {errors.password?.type === "min" && (
                <span className="text-red-400 text-sm">
                  At least 4 character{" "}
                </span>
              )}
            </div>

            {/* Profile Photo */}
            <div>
              <label className="label text-gray-700 dark:text-white">
                Profile Photo
              </label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="file-input text-black dark:bg-white bg-gray-200 input-bordered placeholder:text-black w-full max-w-xs"
              />
              {errors.photo && (
                <span className="text-red-400 text-sm">Photo is required</span>
              )}
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
