import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className=" text-center mt-80 space-y-6">
            <h1 className="text-6xl">404 Not Found (-_-)</h1>
            <Link to="/" className="bg-black p-3 text-white inline-block  rounded-md text-2xl">Back Home</Link>
        </div> 
    );
};

export default PageNotFound;