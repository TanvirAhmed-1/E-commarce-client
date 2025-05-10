import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="error-page min-h-screen flex justify-center items-center"
    >
      <div className="flex justify-center items-center gap-10 flex-col bg-white bg-opacity-80 p-8 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-black">Page Not Found</h3>
        <Link to="/" className="btn btn-primary">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
