import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

// import { IoMdCheckmark, IoMdClose } from 'react-icons/io';
import { StyledInput, StyledWrapperApp, StyledWrapperInput } from './App.style';
import Card from './components/Card/Card';
import { MusicProvider } from './contexts/MusicContex';
import { TokenProvider } from './contexts/TokenContext';

function App() {
  return (
    <TokenProvider>
      <MusicProvider>
        <StyledWrapperApp>
          <AiFillPlayCircle id="iconPlay" size="50px" color="1ed760" />
          <Card />
          <StyledWrapperInput>
            <StyledInput />
            {/* <IoMdCheckmark className="result" size="25px" /> */}
            {/* <IoMdClose className="result" size="25px" /> */}
          </StyledWrapperInput>
        </StyledWrapperApp>
      </MusicProvider>
    </TokenProvider>
  );
}

export default App;
