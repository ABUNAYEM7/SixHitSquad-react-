import PropTypes from "prop-types";
import logo from "../../assets/logo.png";

const Navbar = ({points}) => {
  return (
    <div className="mb-10 p-6">
      <div className="navbar shadow-xl fixed top-0 left-0  z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* sm-screen-dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 text-lg font-normal text-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture </a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-14 h-12" src={logo} alt="Logo" />
          </a>
        </div>
        {/* nav-end-container */}
        <div className="navbar-end">
          <div className="hidden lg:flex">
            {/* lg-screen-dropdown */}
            <ul className="menu menu-horizontal px-1 text-lg font-normal text-secondary">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture </a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          <div className=" mx-5"></div>
          <a className="btn">{points} Coins <i className="fa-solid fa-circle-dollar-to-slot text-yellow-400 text-xl"></i></a>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
    points :PropTypes.number.isRequired,
};

export default Navbar;
