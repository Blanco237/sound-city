import React, { useState } from "react";
import { useEffect } from "react";
import AxiosInstance from "../../api/api";
import Card from "../shared/Card/Card";
import Heading from "../shared/heading/Heading";

const OtherTitles = ({ sid }) => {

  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    const getSimilars = async () => {
      const res = await AxiosInstance.get(`/songs/similar/${sid}`);
      setSimilars(res.data);
    };

    getSimilars();
  }, [sid]);

  return (
    <section className="section gap-4 ">
      <header className="text-white">
        <Heading text={"Similar Hits"} />
      </header>
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-2`}>
        {similars.length === 0 ? (
          <div className="w-full flex flex-col items-center text-white"><h3 className="text-2xl font-medium">Ohhh, This is Embarassing...</h3> <p className="text-gray">No Similar Titles Found</p> </div>
        ) : (
          similars.map((song) => {
            return <Card {...song} full={true} />;
          })
        )}
      </div>
    </section>
  );
};

export default OtherTitles;
