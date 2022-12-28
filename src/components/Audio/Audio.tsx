/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

import { useMusicContext } from '../../contexts/MusicContex';
import { StyledAudio } from './Audio.style';

export default function Audio() {
  const { music } = useMusicContext();

  const playAudio = () => {
    const audioEl = document.getElementById('audio-element');
    audioEl.play();
  };
  return (
    <div>
      <StyledAudio id="audio-element" controls src={music?.items[0].preview_url} />
      <AiFillPlayCircle
        id="iconPlay"
        size="50px"
        color="1ed760"
        onClick={() => playAudio()}
      />
    </div>
  );
}
