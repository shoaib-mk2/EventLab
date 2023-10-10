

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl mb-4 font-bold">404</h1>
            <p className="text-lg mb-8">Oops! Page not found.</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.history.back()}
            >
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;
