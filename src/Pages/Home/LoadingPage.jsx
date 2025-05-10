const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex  items-center gap-4 p-4">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/199956/loading-loader.svg"
          alt="Loading icon"
        />
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
