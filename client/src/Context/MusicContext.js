import { createContext, useState } from "react";

import music from './music.jpg'

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {

    const song = {
        image: music,
        title: "Dream Your Moments (Duet)",
        artist: "Eva Cornish & Brain Hill",
      };

    const allSongs = Array(50).fill(song, 0, 50);

    allSongs.push({
        image: music,
        title: "Love and War",
        artist: "Chain Smokers",
    })

    allSongs.push({
        image: music,
        title: "Love and Power",
        artist: "Ariana Grande",
    })

    allSongs.push({
        image: music,
        title: "Beat it to the Bass",
        artist: "Michael Jackson",
    })

    allSongs.push({
        image: music,
        title: "Bass Running",
        artist: "Black eyed peas",
    })

    allSongs.push({
        image: music,
        title: "Annie",
        artist: "Micheal Jackson",
    })

    const [displaySongs, setDisplaySongs] = useState(allSongs);

    const handleSongs = (songs) => {
        setDisplaySongs(songs);
    }

    return <MusicContext.Provider value={{ songs: displaySongs, handleSongs, allSongs }}>
        {children}
    </MusicContext.Provider>
}

export default MusicContext