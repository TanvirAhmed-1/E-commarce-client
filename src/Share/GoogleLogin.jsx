import { BsGoogle } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleGmailLogin = () => {
    // gmailUser()
    // .then((result) => {
    //   console.log(result.user);
    //   setUsers(result.user)
    //   navigate(location?.state ? location.state : "/")
    // })
    // .catch((err) => {
    //   console.log(err.message);
    //   alert(err.message)
    // });
  };
  return (
    <div>
      <div>
        <h5 className="text-sm text-black text-center">Or sign in with</h5>
        <div className="flex gap-4 justify-center items-center py-6">
          <button className="bg-white p-2 hover:transform transition-transform duration-300 hover:scale-125  rounded-full border border-solid border-gray-500">
            <FaFacebook className="text-xl text-black " />
          </button>

          <button
            onClick={handleGmailLogin}
            className="bg-white p-2 rounded-full hover:transform transition-transform duration-300 hover:scale-125 border border-solid border-gray-500"
          >
            <BsGoogle className="text-xl text-black " />
          </button>

          <button className="bg-white hover:transform transition-transform duration-300 hover:scale-125  p-2 rounded-full border border-solid border-gray-500">
            <FaGithub className="text-xl text-black " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
