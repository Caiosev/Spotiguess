/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import {
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
  const { music, isCorrectArtistName, isCorrectSongName } = useMusicContext();

  const handleReset = () => {
    localStorage.setItem('streak', '0');
    location.reload();
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
    <StyledWrapperControllers>
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
              <AiOutlineReload
                id="iconReload"
                size="30px"
                color="fff"
                onClick={() => handleReset()}
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
                onClick={() => playAudio()}
              />
            </StyledContainerController>
          )}
        </>
      )}
    </StyledWrapperControllers>
  );
}
