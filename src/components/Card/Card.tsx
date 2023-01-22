import React from 'react';
import ReactLoading from 'react-loading';

import { useMusicContext } from '../../contexts/MusicContext';
import {
  ImageCover,
  StyledUnblurredArea,
  StyledWrapperArtistName,
  StyledWrapperCard,
  StyledWrapperCover,
  StyledWrapperTitlePlayer,
} from './Card.style';

export default function Card() {
  const { music, isCorrectArtistName, isCorrectSongName, showCover } = useMusicContext();

  return (
    <StyledWrapperCard>
      {music ? (
        <>
          <StyledWrapperCover>
            <ImageCover url={music?.items[0].album.images[0].url} blur={!showCover} />
            <StyledUnblurredArea />
          </StyledWrapperCover>
          <StyledWrapperTitlePlayer blur={!isCorrectSongName}>
            <h2>{music?.items[0].name}</h2>
          </StyledWrapperTitlePlayer>
          <StyledWrapperArtistName blur={!isCorrectArtistName}>
            <span>{music?.items[0].artists[0].name}</span>
          </StyledWrapperArtistName>
        </>
      ) : (
        <ReactLoading type="spin" color="#fff" />
      )}
    </StyledWrapperCard>
  );
}
