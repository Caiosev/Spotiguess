/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import {
  AiFillEye,
  AiFillForward,
  AiFillPlayCircle,
  AiFillStepForward,
} from 'react-icons/ai';

import { useMusicContext } from '../../contexts/MusicContext';
import { useTokenContext } from '../../contexts/TokenContext';
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
    setIsCorrectSongName,
    setMusic,
    streak,
    setStreak,
  } = useMusicContext();

  const { getNewMusic } = useTokenContext();

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
    const maxStreak = localStorage.getItem('maxStreak');

    if (streak + 1 > Number(maxStreak)) {
      localStorage.setItem('maxStreak', `${Number(streak) + 1}`);
    }

    setStreak(streak + 1);
    setNumberHints(0);
    setisCorrectArtistName(false);
    setShowCover(false);
    setIsCorrectSongName(false);
    setMusic(null);
    getNewMusic();
  };

  const playAudio = () => {
    const audioEl = document.getElementById('audio-element') as HTMLAudioElement | null;
    if (audioEl !== null) {
      audioEl.play();
    }
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
