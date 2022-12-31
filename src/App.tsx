import React from 'react';

import { StyledWrapperApp } from './App.style';
import Card from './components/Card/Card';
import Audio from './components/Controller/Controller';
import Input from './components/Input/Input';
import Score from './components/Score/Score';
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
          <Score />
        </StyledWrapperApp>
      </MusicProvider>
    </TokenProvider>
  );
}

export default App;
