import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">CoreAuth</h1>

        <div className="flex gap-6">
          <Link className="hover:text-blue-600" to="/">Home</Link>
          <Link className="hover:text-blue-600" to="/login">Login</Link>
          <Link className="hover:text-blue-600" to="/register">Register</Link>
          <Link className="hover:text-blue-600" to="/dashboard">Dashboard</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

