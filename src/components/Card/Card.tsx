import React from 'react';
import ReactLoading from 'react-loading';

import { useMusicContext } from '../../contexts/MusicContex';
import {
  ImageCover,
  StyledUnblurredArea,
  StyledWrapperArtistName,
  StyledWrapperCard,
  StyledWrapperCover,
  StyledWrapperTitlePlayer,
} from './Card.style';

export default function Card() {
  const { music } = useMusicContext();

  return (
    <StyledWrapperCard>
      {music ? (
        <>
          <StyledWrapperCover>
            <ImageCover url={music?.items[0].album.images[0].url} />
            <StyledUnblurredArea />
          </StyledWrapperCover>
          <StyledWrapperTitlePlayer>
            <h2>{music?.items[0].name}</h2>
          </StyledWrapperTitlePlayer>
          <StyledWrapperArtistName>
            <span>{music?.items[0].artists[0].name}</span>
          </StyledWrapperArtistName>
        </>
      ) : (
        <ReactLoading type="spin" color="#fff" />
      )}
    </StyledWrapperCard>
  );
}
