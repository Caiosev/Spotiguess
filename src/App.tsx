import React from 'react';

import { StyledWrapperApp } from './App.style';
import Card from './components/Card/Card';
import Controller from './components/Controller/Controller';
import Input from './components/Input/Input';
import ModalComponent from './components/Modal';
import Score from './components/Score/Score';
import { MusicProvider } from './contexts/MusicContext';
import { TokenProvider } from './contexts/TokenContext';
function App() {
  window.addEventListener('beforeunload', function () {
    localStorage.setItem('streak', '0');
  });

  return (
    <>
      <ModalComponent />
      <TokenProvider>
        <MusicProvider>
          <StyledWrapperApp>
            <Card />
            <Controller />
            <Input />
            <Score />
          </StyledWrapperApp>
        </MusicProvider>
      </TokenProvider>
    </>
  );
}

export default App;
