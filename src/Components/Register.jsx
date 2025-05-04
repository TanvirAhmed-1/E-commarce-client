import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import axios from "axios";
import Lottie from "lottie-react";
import registerAnimation from "../assets/Animation - 1745245679887.json";
import { AuthContext } from "./Authontation/Authorization";

// profile image upload API
const imgCode = import.meta.env.VITE_IMG_KEY;
const imgURL = `https://api.imgbb.com/1/upload?key=${imgCode}`;

import AxiosPublic from "./../Hook/AxiosPublic";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import LoadingPage from './../Pages/Home/LoadingPage';

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { registerUser, setUsers, UpdateUserProfile } = useContext(AuthContext);
  const axiosPublic = AxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const[loader, setLoader]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true)

    const fileImg = { image: data.photo[0] };
    try {
      const res = await axios.post(imgURL, fileImg, {
        headers: { "content-type": "multipart/form-data" },
      });
      const imageUrl = res.data?.data?.display_url;
      console.log("Uploaded Image:", imageUrl);
      console.log("Form Data:", data);

      if (res.data.success) {
        const { name, email, password } = data;
        const userData = {
          UserName: name,
          Email: email,
        };
        // TODO: Use this data as needed
        registerUser(email, password)
          .then((res) => {
            console.log(res.user);
            setUsers(res.user)
            UpdateUserProfile({
              displayName:data?.name,
              photoURL: imageUrl,
            })
            axiosPublic
            .post("/users", userData)
            .then((res) => {
              console.log(res.data);
               setLoader(false)
              navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
              setLoader(false);
              console.log(err.message);
            });
          })
          .catch((err) => {
            setLoader(false);
            console.log(err.message);
          });
      }
    } catch (err) {
      setLoader(false);
      console.error("Image upload failed:", err);
    }
  };

  if(loader){
    return <LoadingPage></LoadingPage>
  }

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
                className="input  bg-gray-800 input-bordered w-full"
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
                className="input  bg-gray-800 input-bordered w-full"
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
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,15}$/,
                  min: 6,
                  max: 15,
                })}
                placeholder="Password"
                className="input  bg-gray-200 text-black input-bordered w-full"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute top-[38px] right-6 z-50 cursor-pointer"
              >
                {showPass ? (
                  <FaRegEye className="text-xl text-black" />
                ) : (
                  <FaEyeSlash className="text-xl text-black" />
                )}
              </button>

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
