import {  NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useMentor from "../hooks/useMentor";
import DarkModeToggler from "../Components/SocialSignIn/DarkModeToggler";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isMentor] = useMentor();

  const navContent = (
    <>
      {isAdmin ? (
        <>
          <li>
            <NavLink to="manage-users">Manage users</NavLink>
          </li>
          <li>
            <NavLink to="manage-courses">Manage courses</NavLink>
          </li>
        </>
      ) : isMentor ? (
        <>
          <li>
            <NavLink to="my-courses">My courses</NavLink>
          </li>
          <li>
            <NavLink to="add-a-course">Add a course</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="selected-courses">My selected courses</NavLink>
          </li>
          <li>
            <NavLink to="enrolled-courses">My enrolled courses</NavLink>
          </li>
          <li>
            <NavLink to="payments">My payment history</NavLink>
          </li>
        </>
      )}
      <li>
        <div className="divider"></div>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <DarkModeToggler/>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-300 flex flex-col py-10 px-20">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-info drawer-button lg:hidden"
        >
          Open side navbar
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
          {navContent}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
