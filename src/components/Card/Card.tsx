import React from 'react';

import { useMusicContext } from '../../contexts/MusicContex';
import {
  StyledWrapperArtistName,
  StyledWrapperCard,
  StyledWrapperCover,
  StyledWrapperTitlePlayer,
} from './Card.style';

export default function Card() {
  const { music } = useMusicContext();

  return (
    <StyledWrapperCard>
      <StyledWrapperCover>
        <img src={music?.items[0].album.images[0].url} alt="" />
      </StyledWrapperCover>
      <StyledWrapperTitlePlayer>
        <h2>{music?.items[0].name}</h2>
      </StyledWrapperTitlePlayer>
      <StyledWrapperArtistName>
        <span>{music?.items[0].artists[0].name}</span>
      </StyledWrapperArtistName>
    </StyledWrapperCard>
  );
}
