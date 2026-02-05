import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md space-y-6">
        <Login />
        <Register />
      </div>
    </div>
  );
}

export default App;
