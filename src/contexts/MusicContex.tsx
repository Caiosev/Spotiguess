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
  showCover: boolean;
  setShowCover: (showCover: boolean) => void;
  setMusic: (music: Music | null) => void;
  streak: number;
  setStreak: (streak: number) => void;
};

const MusicContext = createContext<MusicState>({
  music: null,
  isCorrectSongName: false,
  showCover: false,
  streak: 0,
  setShowCover: () => {
    /* */
  },
  setIsCorrectSongName: () => {
    /* */
  },
  isCorrectArtistName: false,
  setisCorrectArtistName: () => {
    /* */
  },
  setMusic: () => {
    /* */
  },
  setStreak: () => {
    /* */
  },
});

export const MusicProvider: FC<React.ReactNode> = ({ children }) => {
  const [music, setMusic] = useState<Music | null>(null);
  const [isCorrectSongName, setIsCorrectSongName] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);
  const [isCorrectArtistName, setisCorrectArtistName] = useState<boolean>(false);
  const [showCover, setShowCover] = useState<boolean>(
    isCorrectSongName && isCorrectArtistName ? true : false,
  );

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
        showCover,
        setShowCover,
        setMusic,
        streak,
        setStreak,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => useContext(MusicContext);
