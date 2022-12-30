import { createContext, FC, useContext, useEffect, useState } from 'react';

import { Music } from '../types/Music';
import getMusic from '../utils/getMusic';
import { useTokenContext } from './TokenContext';

export type MusicState = {
  music: Music | null;
  isCorrectSongName: boolean;
  setIsCorrectSongName: (isCorrectSongName: boolean) => void;
  isCorrectArtistName: boolean;
  setisCorrectArtistName: (isCorrectArtistName: boolean) => void;
};

const MusicContext = createContext<MusicState>({
  music: null,
  isCorrectSongName: false,
  setIsCorrectSongName: () => {
    /* */
  },
  isCorrectArtistName: false,
  setisCorrectArtistName: () => {
    /* */
  },
});

export const MusicProvider: FC<React.ReactNode> = ({ children }) => {
  const [music, setMusic] = useState<Music | null>(null);
  const [isCorrectSongName, setIsCorrectSongName] = useState<boolean>(false);
  const [isCorrectArtistName, setisCorrectArtistName] = useState<boolean>(false);

  const { token } = useTokenContext();

  useEffect(() => {
    (async () => {
      const newMusic = await getMusic(token);
      setMusic(newMusic);
    })();
  }, [token]);

  return (
    <MusicContext.Provider
      value={{
        music,
        isCorrectSongName,
        setIsCorrectSongName,
        isCorrectArtistName,
        setisCorrectArtistName,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => useContext(MusicContext);
