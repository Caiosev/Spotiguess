import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

import { StyledWrapperApp } from './App.style';
import Card from './components/Card/Card';

function App() {
  return (
    <StyledWrapperApp>
      <AiFillPlayCircle id="iconPlay" size="50px" color="1ed760" />
      <Card />
    </StyledWrapperApp>
  );
}

export default App;
