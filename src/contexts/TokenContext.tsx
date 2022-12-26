import { createContext, FC, useEffect, useState } from 'react';

import getToken from '../utils/getToken';

const TokenContext = createContext({ token: '' });

const TokenProvider: FC<React.ReactNode> = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    (async () => {
      const newToken = await getToken();
      setToken(newToken);
    })();
  }, []);

  return <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>;
};

export default TokenProvider;
