const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm min-h-screen">
            <span className="loading loading-bars loading-xl text-white"></span>
        </div>
    );
};

export default Loader;
