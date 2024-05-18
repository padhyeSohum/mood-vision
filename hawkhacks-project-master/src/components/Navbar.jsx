import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <header className="mb-5">
        <div className="flex justify-between items-end px-5 pt-5 pb-1 bg-gray-900">
          {/* TITLE */}
          <div className="font-bold text-2xl text-white">
            <Link to="/">
              <p className="align-bottom">Brain Matter</p>
            </Link>
          </div>
          {/* Navigation Items */}
          <div className="flex gap-10 justify-end text-lg text-white">
            <NavLink
                className={({ isActive }) =>
                    isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"
                }
                to="/home"
            >
              Home
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"
                }
                to="/about"
            >
              About
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? "text-green-500 font-bold hover:underline" : "hover:underline"
                }
                to="/forum"
            >
              Forum
            </NavLink>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
