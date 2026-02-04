const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-lg"
        />

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
