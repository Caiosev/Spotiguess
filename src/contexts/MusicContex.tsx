import { createContext, FC, useContext, useEffect, useState } from 'react';

import { Music } from '../types/Music';
import getMusic from '../utils/getMusic';
import { useTokenContext } from './TokenContext';

export type MusicState = { music: Music | null };

const MusicContext = createContext<MusicState>({ music: null });

export const MusicProvider: FC<React.ReactNode> = ({ children }) => {
  const [music, setMusic] = useState<Music | null>(null);
  const { token } = useTokenContext();

  useEffect(() => {
    (async () => {
      const newMusic = await getMusic(token);
      setMusic(newMusic);
    })();
  }, [token]);

  return <MusicContext.Provider value={{ music }}>{children}</MusicContext.Provider>;
};

export const useMusicContext = () => useContext(MusicContext);
