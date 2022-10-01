import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../api/api";

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {

    const [allSongs, setAllSongs] = useState([]);
    const [displaySongs, setDisplaySongs] = useState(allSongs);

    useEffect(() => {
        const getAllSongs = async () => {
            const res = await AxiosInstance.get('/songs/getAll');
            setAllSongs(res.data);
            setDisplaySongs(res.data);
        }

        getAllSongs();
    }, [])

    const handleSongs = (songs) => {
        setDisplaySongs(songs);
    }

    return <MusicContext.Provider value={{ songs: displaySongs, handleSongs, allSongs,  }}>
        {children}
    </MusicContext.Provider>
}

export default MusicContext