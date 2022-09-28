import { useContext } from "react"
import MusicContext from "../Context/MusicContext"

const useMusic = () => {

    const musicData = useContext(MusicContext);

    return musicData;

}

export default useMusic;