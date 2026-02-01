import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="text-gray-600 mb-6">
        Browse remote and on-site jobs from top companies
      </p>
      <Link
        to="/jobs"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
      >
        View Jobs
      </Link>
    </div>
  );
}

export default Home;
