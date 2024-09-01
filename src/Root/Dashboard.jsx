import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { BsPostcardHeartFill } from "react-icons/bs";

const Dashboard = () => {
  const admin = true;

  return (
    <div className="lg:flex">
      <div className="lg:w-80 bg-purple-400 lg:h-screen p-4">
        {admin ? (
          <>
            <NavLink to="/dashboard">
              <button className="btn w-full mt-8">
                <MdPostAdd />
                Dashboard
              </button>
            </NavLink>

            <NavLink to="/dashboard/add-post">
              <button className="btn w-full mt-8">
                <MdPostAdd />
                Add Post
              </button>
            </NavLink>

            <NavLink to="/dashboard/manage-users">
              <button className="btn w-full mt-8">
                <FaUsers />
                Manage Users
              </button>
            </NavLink>

            <NavLink to="/dashboard/posts">
              <button className="btn w-full mt-8">
                <BsPostcardHeartFill />
                My Posts
              </button>
            </NavLink>

            <NavLink to="/dashboard/myProfile">
              <button className="btn w-full mt-8">
                <FaUsers />
                My Profile
              </button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/dashboard">
              <button className="btn w-full mt-8">
                <MdPostAdd />
                Dashboard
              </button>
            </NavLink>

            <NavLink to="/dashboard/my-profile">
              <button className="btn w-full mt-8">
                <FaUsers />
                My Profile
              </button>
            </NavLink>
          </>
        )}

        <div className="divider divider-info mt-12">or</div>

        <NavLink to="/">
          <button className="btn w-full mt-12">
            <FaHome />
            Back Home
          </button>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
