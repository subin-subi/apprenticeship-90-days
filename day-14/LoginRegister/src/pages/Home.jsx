import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-6">
          Welcome 🚀
        </h1>

        <p className="text-gray-600 mb-8">
          Please login or create an account
        </p>

        <div className="space-y-4">
          <Link
            to="/login"
            className="block bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="block border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
