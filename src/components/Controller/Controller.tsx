/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import {
  AiFillEye,
  AiFillForward,
  AiFillPlayCircle,
  AiFillStepForward,
  AiOutlineReload,
} from 'react-icons/ai';

import { useMusicContext } from '../../contexts/MusicContex';
import {
  StyledAudio,
  StyledContainerController,
  StyledWrapperControllers,
} from './Controller.style';

export default function Audio() {
  const [numberHints, setNumberHints] = useState<number>(0);

  const {
    music,
    isCorrectArtistName,
    setisCorrectArtistName,
    isCorrectSongName,
    setShowCover,
  } = useMusicContext();

  const handleReset = () => {
    localStorage.setItem('streak', '0');
    location.reload();
  };

  const handleShowHint = () => {
    setNumberHints(numberHints + 1);
    if (!isCorrectArtistName) {
      setisCorrectArtistName(true);
      return;
    }
    setShowCover(true);
  };

  const handleNextMusic = () => {
    const streak = localStorage.getItem('streak');
    const maxStreak = localStorage.getItem('maxStreak');

    if (!streak) {
      localStorage.setItem('streak', '1');
      localStorage.setItem('maxStreak', '1');
    } else {
      localStorage.setItem('streak', `${Number(streak) + 1}`);
      if (Number(streak) + 1 > Number(maxStreak)) {
        localStorage.setItem('maxStreak', `${Number(streak) + 1}`);
      }
    }
    location.reload();
  };

  const playAudio = () => {
    const audioEl = document.getElementById('audio-element');
    audioEl.play();
  };

  return (
    <StyledWrapperControllers activeEye={numberHints >= 2 ? false : true}>
      {music && (
        <>
          <StyledAudio id="audio-element" controls src={music?.items[0].preview_url} />
          {isCorrectArtistName && isCorrectSongName ? (
            <AiFillForward
              id="iconFoward"
              size="50px"
              color="1ed760"
              onClick={() => handleNextMusic()}
            />
          ) : (
            <StyledContainerController>
              <AiFillEye
                id="iconEye"
                size="30px"
                color={numberHints >= 2 ? '1d1d1d' : 'fff'}
                onClick={() => handleShowHint()}
              />
              <AiFillPlayCircle
                id="iconPlay"
                size="50px"
                color="1ed760"
                onClick={() => playAudio()}
              />
              <AiFillStepForward
                id="iconFoward"
                size="30px"
                color="fff"
                onClick={() => handleReset()}
              />
            </StyledContainerController>
          )}
        </>
      )}
    </StyledWrapperControllers>
  );
}
