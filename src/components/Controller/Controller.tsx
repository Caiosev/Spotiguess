/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { AiFillForward, AiFillPlayCircle } from 'react-icons/ai';

import { useMusicContext } from '../../contexts/MusicContex';
import { StyledAudio, StyledWrapperControllers } from './Controller.style';

export default function Audio() {
  const { music, isCorrectArtistName, isCorrectSongName } = useMusicContext();

  const handleNextMusic = () => {
    const currentPoints = localStorage.getItem('points');
    if (!currentPoints) {
      localStorage.setItem('points', '5');
    } else {
      localStorage.setItem('points', `${Number(currentPoints) + 5}`);
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
            <AiFillPlayCircle
              id="iconPlay"
              size="50px"
              color="1ed760"
              onClick={() => playAudio()}
            />
          )}
        </>
      )}
    </StyledWrapperControllers>
  );
}
