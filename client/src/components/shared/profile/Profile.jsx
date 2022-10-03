import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../firebase/auth";
import useLoading from "../../../hooks/useLoading";
import useUser from "../../../hooks/useUser";
import { ROUTES } from "../../../utils/statics";

const Profile = () => {
  const [showProfileMenu, setProfileMenu] = React.useState(false);

  const navigator = useNavigate();

  const user = useUser();

  const { handleLoading } = useLoading();

  const handleSignOut = async () => {
    handleLoading(true);
    await logout();
    navigator("../home", { replace: true });
    handleLoading(false);
  };

  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={() => setProfileMenu(true)}
    >
      <div
        className={`w-10 h-10 border border-primary rounded-full overflow-hidden`}
      >
        <img src={user?.photoURL} alt="Profile" className="full" />
      </div>
      {showProfileMenu && (
        <div
          className={`shadow absolute top-14 right-0 w-28 px-2 py-3 bg-slate-400 rounded text-center isolate animate-in slide-in-from-bottom-6 fade-in-40 duration-500 flex flex-col gap-2`}
          onMouseOut={() => setProfileMenu(false)}
        >
          <span className="w-5 h-5 bg-slate-400 absolute -top-1 right-2 rotate-45 z-[-1]"></span>
          <NavLink
            to={ROUTES.LIBRARY}
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
            onClick={() => setProfileMenu(false)}
          >
            <p className="cursor-pointer hover:bg-slate-200 hover:bg-opacity-30 transition-all">
              My Library
            </p>
          </NavLink>
          <NavLink
            to={ROUTES.UPLOAD}
            style={({ isActive }) =>
              isActive ? { textDecoration: "underline" } : undefined
            }
            onClick={() => setProfileMenu(false)}
          >
            <p className="cursor-pointer hover:bg-slate-200 hover:bg-opacity-30 transition-all">
              Upload
            </p>
          </NavLink>
          <p
            className="cursor-pointer hover:bg-slate-200 hover:bg-opacity-30 active:bg-opacity-50 transition-all"
            onClick={handleSignOut}
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
