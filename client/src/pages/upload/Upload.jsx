import React from "react";
import Heading from "../../components/shared/heading/Heading";
import Uploader from "../../components/Upload/Uploader";

const Upload = () => {
  return (
    <main className="md:pt-[8rem] pt-[6rem] pb-4 bg-secondary flex flex-col gap-10 justify-center items-center">
      <section className="bg-midnight md:w-1/2 w-11/12 md:py-8 py-4 px-4 shadow rounded-md flex flex-col items-center gap-4 text-white">
        <h1 className="text-3xl text-center">
          Upload and Share Your Music with The World
        </h1>
        <div className="flex w-full justify-between md:flex-row flex-col">
          <Uploader filetype={"Audio"} />
          <Uploader filetype={"Image"} />
        </div>
      </section>
      <section className="bg-midnight md:w-1/2 w-11/12 md:py-8 py-4 px-4 shadow rounded-md flex flex-col items-center gap-4 text-white">
        <Heading text={"Track Information"} styles={"text-4xl text-primary"} />
        <form className=" w-10/12 grid md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4">
          <label htmlFor="">
            <p className="mb-2">Track Name *</p>
            <input type="text" className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"/>
          </label>
          <label htmlFor="">
            <p className="mb-2">Artist Name *</p>
            <input type="text" className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"/>
          </label>
          <label htmlFor="">
            <p className="mb-2">Album</p>
            <input type="text" className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"/>
          </label>
          <label htmlFor="">
            <p className="mb-2">Select Privacy</p>
            <select className="w-11/12 px-3 py-1 text-secondary rounded shadow-md">
                <option value="public">Public</option>
                <option value="private">Private</option>
            </select>
          </label>
        </form>
        <button className="btn-primary mt-4">Upload Now</button>
      </section>
    </main>
  );
};

export default Upload;
