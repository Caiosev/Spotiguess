import { createContext, FC, useContext, useEffect, useState } from 'react';

import getToken from '../utils/getToken';

export type TokenState = {
  token: string;
  getNewMusic: () => void;
};

const TokenContext = createContext<TokenState>({
  token: '',
  getNewMusic: () => {
    /* */
  },
});

export const TokenProvider: FC<React.ReactNode> = ({ children }) => {
  const [token, setToken] = useState('');

  const getNewMusic = async () => {
    const newToken = await getToken();
    setToken(newToken);
  };
  useEffect(() => {
    getNewMusic();
  }, []);

  return (
    <TokenContext.Provider value={{ token, getNewMusic }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => useContext(TokenContext);
