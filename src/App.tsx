import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { IoMdCheckmark, IoMdClose } from 'react-icons/io';

import { StyledInput, StyledWrapperApp, StyledWrapperInput } from './App.style';
import Card from './components/Card/Card';
import TokenProvider from './contexts/TokenContext';

function App() {
  return (
    <TokenProvider>
      <StyledWrapperApp>
        <AiFillPlayCircle id="iconPlay" size="50px" color="1ed760" />
        <Card />
        <StyledWrapperInput>
          <StyledInput />
          <IoMdCheckmark className="result" size="25px" />
          {/* <IoMdClose className="result" size="25px" /> */}
        </StyledWrapperInput>
      </StyledWrapperApp>
    </TokenProvider>
  );
}

export default App;
