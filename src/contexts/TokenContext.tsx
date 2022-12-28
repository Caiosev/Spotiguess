import { createContext, FC, useContext, useEffect, useState } from 'react';

import getToken from '../utils/getToken';

const TokenContext = createContext({ token: '' });

export const TokenProvider: FC<React.ReactNode> = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      const newToken = await getToken();
      setToken(newToken);
    })();
  }, []);

  return <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>;
};

export const useTokenContext = () => useContext(TokenContext);
