import React from 'react';

import { useMusicContext } from '../../contexts/MusicContext';
import { StyledText, StyledWrapperScore } from './Score.style';

export default function Score() {
  const { streak } = useMusicContext();
  const maxStreak = localStorage.getItem('maxStreak');
  return (
    <StyledWrapperScore>
      <StyledText>
        <h3>
          Current Streak: <span>{streak ? streak : 0}</span>
        </h3>
      </StyledText>
      <StyledText>
        <h3>
          Max Streak: <span>{maxStreak ? maxStreak : 0}</span>
        </h3>
      </StyledText>
    </StyledWrapperScore>
  );
}
