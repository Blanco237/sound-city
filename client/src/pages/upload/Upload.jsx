import React, { useState, useRef, useEffect } from "react";

import { notify } from 'react-notify-toast'

import Heading from "../../components/shared/heading/Heading";
import Uploader from "../../components/Upload/Uploader";

const Upload = () => {
  const [formData, setForm] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [audioFile, setAudioFile] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data loading");
    console.log(formData);
    if(!audioFile){
      notify.show("Please Add an Audio File", "warning", 1500);
      return;
    }
  };

  return (
    <main className="md:pt-[8rem] pt-[6rem] pb-4 bg-secondary flex flex-col gap-10 justify-center items-center">
      <section className="bg-midnight md:w-1/2 w-11/12 md:py-8 py-4 px-4 shadow rounded-md flex flex-col items-center gap-4 text-white">
        <h1 className="text-3xl text-center">
          Upload and Share Your Music with The World
        </h1>
        <div className="flex w-full justify-between md:flex-row flex-col">
          <Uploader filetype={"Audio"} setFile={setAudioFile} file={audioFile}/>
          <Uploader filetype={"Image"} setFile={setImageFile} file={imageFile}/>
        </div>
      </section>
      <section className="bg-midnight md:w-1/2 w-11/12 md:py-8 py-4 px-4 shadow rounded-md flex flex-col items-center gap-4 text-white">
        <Heading text={"Track Information"} styles={"text-4xl text-primary"} />
        <form
          className=" w-10/12 grid md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-4"
          onSubmit={handleSubmit}
        >
          <label htmlFor="track">
            <p className="mb-2">Track Name *</p>
            <input
              type="text"
              className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"
              name="track"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="artist">
            <p className="mb-2">Artist Name *</p>
            <input
              type="text"
              className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"
              name="artist"
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="album">
            <p className="mb-2">Album</p>
            <input
              type="text"
              className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"
              name="album"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="privacy">
            <p className="mb-2">Select Privacy</p>
            <select
              className="w-11/12 px-3 py-1 text-secondary rounded shadow-md"
              name="privacy"
              onChange={handleChange}
            >
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </label>
        <div className="w-full"><button
          className="btn-primary mt-4"
        >
          Upload Now
        </button></div>
        </form>
      </section>
    </main>
  );
};

export default Upload;
