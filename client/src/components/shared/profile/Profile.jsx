import React from "react";

import female from "./female.jpg";

const Profile = () => {
  const [showProfileMenu, setProfileMenu] = React.useState(false);

  return (
    <div className="relative cursor-pointer" onMouseOver={() => setProfileMenu(true)}>
      <div
        className={`w-10 h-10 border border-primary rounded-full overflow-hidden`}
      >
        <img src={female} alt="Profile" className="full" />
      </div>
      {showProfileMenu && (
        <div
          className={`shadow absolute top-14 right-0 w-28 px-2 py-3 bg-slate-400 rounded text-center isolate animate-in slide-in-from-bottom-6 fade-in-40 duration-500 flex flex-col gap-2`}
          onMouseOut={() => setProfileMenu(false)}>
          <span className="w-5 h-5 bg-slate-400 absolute -top-1 right-2 rotate-45 z-[-1]"></span>
          <p className="cursor-pointer hover:bg-slate-200 hover:bg-opacity-30 transition-all">My Library</p>
          <p className="cursor-pointer hover:bg-slate-200 hover:bg-opacity-30 transition-all">Upload</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
