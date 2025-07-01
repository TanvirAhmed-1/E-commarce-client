import Lottie from "lottie-react";
import login from "../assets/Login.json";
import GoogleLogin from "../Share/GoogleLogin";
import { useContext, useState } from "react";
import { AuthContext } from "./Authontation/Authorization";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;

    const user = { email, password };
    console.log(user);
    userSignIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-white dark:bg-black flex justify-center items-center">
      <div className="w-[80%] flex flex-col lg:flex-row-reverse items-center gap-6">
        <div className="lg:w-[55%] flex-1">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="card bg-white dark:bg-gray-800 shadow-lg p-6 lg:w-[35%] flex-1">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input dark:bg-white bg-gray-300 placeholder-black text-black input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass?"text" :"password"}
                  name="password"
                  placeholder="password"
                  className="input bg-white placeholder-black text-black  input-bordered w-full"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-[10px] right-6 z-50 cursor-pointer"
                >
                  {showPass ? (
                    <FaRegEye className="text-xl text-black" />
                  ) : (
                    <FaEyeSlash className="text-xl text-black" />
                  )}
                </button>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </form>
          <section>
            <GoogleLogin></GoogleLogin>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
