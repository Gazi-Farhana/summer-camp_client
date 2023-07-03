import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import useMentor from "../../../hooks/useMentor";
import DarkModeToggler from "../../../Components/SocialSignIn/DarkModeToggler";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isMentor] = useMentor();

  console.log(isAdmin, isMentor);

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="mentors">Mentors</NavLink>
      </li>
      <li>
        {isAdmin ? (
          <NavLink to="/dashboard/manage-users">Admin/Dashboard</NavLink>
        ) : isMentor ? (
          <NavLink to="dashboard/my-courses">Mentor/Dashboard</NavLink>
        ) : user ? (
          <NavLink to="/dashboard/selected-courses">Student/Dashboard</NavLink>
        ) : (
          ""
        )}
      </li>
      {user && (
        <li>
          <button onClick={logOut}>Logout</button>
        </li>
      )}
      <li>
        <DarkModeToggler />
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <div className="w-12">
          <img src="assets/images/melody_logo.jpg" alt="" />
        </div>
        <a className="btn btn-ghost normal-case text-xl">Melody Haven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          </div>
        ) : (
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
