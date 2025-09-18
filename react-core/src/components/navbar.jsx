import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto bg-gray-100 py-4 px-5 mt-6 rounded-xl">
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/posts"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-gray-800"
          }
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
}
