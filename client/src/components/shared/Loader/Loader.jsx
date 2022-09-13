import React from "react";
import { useContext } from "react";

import logo from "../../../assets/logo.png";
import LoadingContext from "../../../Context/LoadingContext";

const Loader = () => {
  const { loading } = useContext(LoadingContext);

  if (!loading) {
    return null;
  }

  return (
    <main className="w-screen h-screen bg-black bg-opacity-80 z-[100] top-0 left-0 fixed grid place-items-center">
      <div className="w-12">
        <img src={logo} alt="Sound City Logo" className="w-full animate-ping" />
      </div>
    </main>
  );
};

export default Loader;
