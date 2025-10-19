import { NavLink } from "react-router-dom";

export default function Login() {
  return (
    <div className="my-8 flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center text-amber-500 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-600 mt-3">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-amber-500 hover:underline">
              Register now
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
