import React from "react";
import { Navigate } from 'react-router-dom'

import useUser from "../../../hooks/useUser";

const UserInfo = () => {

  const user = useUser();

  if(!user){
    return <Navigate to={'/home'} replace={true}/>
  }

  return (
    <section className="section text-white gap-4">
      <main className="flex w-full justify-start items-center gap-8">
        <div className="md:w-2/12 w-5/12 bg-pink-400 rounded-full border-2 border-primary overflow-hidden">
          <img src={user?.photoURL} alt="Profile"  className="w-full"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray">Welcome back</p>
          <h1 className="text-4xl text-primary">{user?.displayName}</h1>
          <p>25 Uploads</p>
        </div>
      </main>
      <aside className="self-end">
        <button className="btn-primary"> Upload New Song </button>
      </aside>
    </section>
  );
};

export default UserInfo;
