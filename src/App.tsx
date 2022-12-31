import React from 'react';

import { StyledWrapperApp } from './App.style';
import Card from './components/Card/Card';
import Audio from './components/Controller/Controller';
import Input from './components/Input/Input';
import { MusicProvider } from './contexts/MusicContex';
import { TokenProvider } from './contexts/TokenContext';

function App() {
  return (
    <TokenProvider>
      <MusicProvider>
        <StyledWrapperApp>
          <Card />
          <Audio />
          <Input />
        </StyledWrapperApp>
      </MusicProvider>
    </TokenProvider>
  );
}

export default App;
