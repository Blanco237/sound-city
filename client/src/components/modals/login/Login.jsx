import React from "react";
import { useContext, useState } from "react";

import LoadingContext from "../../../Context/LoadingContext";

import { loginUser, loginWithGoogle } from "../../../firebase/auth";
import { notify } from "react-notify-toast";

import Heading from "../../shared/heading/Heading";
import Rlink from "../../shared/link/Rlink";

import headphones from "./headphones.png";
import useWindowSize from "../../../hooks/useWindowSize";
import { useNavigate } from "react-router-dom";

const Login = ({ closeModal, register }) => {
  const [formData, setForm] = useState({});
  const { handleLoading } = useContext(LoadingContext);
  const { width: size } = useWindowSize();
  const navigator = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleLoading(true);
    const res = await loginUser(formData);
    handleLoading(false);
    if (res.success) {
      try {
        notify.show("Login Successful", "success", 2500);
      } catch (e) {
        console.log(e);
        console.log("Changed page??");
      } finally {
        closeModal();
        navigator("../library", { replace: true });
      }
    } else {
      notify.show(res.emessage, "error");
    }
  };

  const googleLogin = async () => {
    handleLoading(true);
    const res = await loginWithGoogle(size);
    handleLoading(false);
    if (res.success) {
      try {
        notify.show("Google Login Success", "success", 2500);
      } catch (e) {
        console.log(e);
        console.log("Changed page??");
      } finally {
        closeModal();
        navigator("../library", { replace: true });
      }
    } else {
      notify.show(res.emessage, "error");
    }
  };

  return (
    <aside
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-[99]"
      onClick={closeModal}
    >
      <section
        className="md:flex-row flex-col items-center gap-2 w-10/12 md:w-9/12 bg-gradient-to-r from-emerald-400 to-primary px-4 py-4 flex justify-between rounded-md shadow-lg relative animate-in zoom-in-50 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <span
          className="absolute bg-white aspect-square w-8 flex justify-center items-center rounded-full text-xl font-medium -right-5 -top-4 shadow-sm cursor-pointer"
          onClick={closeModal}
        >
          X
        </span>
        <div className="md:w-1/2 w-1/5">
          <img src={headphones} alt="Headphones" className="w-full" />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full md:w-1/2 text-center text-white">
          <Heading text="Login/Sign In" color="white" styles={"text-3xl"} />
          <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="email"
              placeholder="Enter your Email"
              className="px-4 py-1 rounded shadow-md text-secondary"
              name="email"
              required
            />
            <input
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className="px-4 py-1 rounded shadow-md text-secondary"
              name="password"
              required
            />
            <button className="px-5 py-1 bg-transparent border border-white mt-3 rounded-2xl hover:bg-white hover:text-secondary hover:shadow-md transition-all duration-500">
              Login Now
            </button>
          </form>
          <button
            className="px-5 py-1 font-medium active:shadow-none border border-white mt-3 rounded-2xl bg-white text-secondary hover:shadow-md transition-all duration-500"
            onClick={googleLogin}
          >
            Login with Google
          </button>
          <div>
            <Rlink text="Forgot Password" color="white" />
            <p className="flex gap-2">
              <i>Don't have an Account?</i>{" "}
              <Rlink text="Register Here" color="white" onClick={register} />{" "}
            </p>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Login;
