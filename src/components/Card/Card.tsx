import React from 'react';

import coverMock from '../../../resources/cover_mock.jpg';
import {
  StyledWrapperArtistName,
  StyledWrapperCard,
  StyledWrapperCover,
  StyledWrapperTitlePlayer,
} from './Card.style';

export default function Card() {
  return (
    <StyledWrapperCard>
      <StyledWrapperCover>
        <img src={coverMock} alt="" />
      </StyledWrapperCover>
      <StyledWrapperTitlePlayer>
        <h2>Starboy</h2>
        {/* play */}
      </StyledWrapperTitlePlayer>
      <StyledWrapperArtistName>
        <span>The weeknd</span>
      </StyledWrapperArtistName>
    </StyledWrapperCard>
  );
}
