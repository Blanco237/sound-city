import React from "react";
import { useState, useEffect } from "react";
import AxiosInstance from "../../api/api";
import UserInfo from "../../components/Library/UserInfo/UserInfo";
import YourSongs from "../../components/Library/YourSongs/YourSongs";
import useUser from "../../hooks/useUser";

const Library = () => {
  const [uploadCount, setUploadCount] = useState(0);
  const [yourSongs, setSongs] = useState([]);

  const user = useUser();

  useEffect(() => {
    const getUploadCount = async () => {
        const res = await AxiosInstance.get(`/songs/getLibrary/${user.uid}`)
        setUploadCount(Number(res.data.count));
        setSongs(res.data.rows);
    }

    if(user) getUploadCount();
  }, []);

  return (
    <main className="md:pt-[6rem] pt-[6rem] pb-4 bg-secondary">
      <UserInfo user={user} uploadCount={uploadCount} />
      <YourSongs songs={yourSongs}/>
    </main>
  );
};

export default Library;
