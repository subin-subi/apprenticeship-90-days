import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Core Routing App 🚀
      </h1>
      <p className="text-gray-600 mb-8">
        Learn protected routes, layouts, and auth redirects the right way.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
