import styled from 'styled-components';

interface ImageProps {
  url: string;
}

export const StyledWrapperCard = styled.div`
  color: #b3b3b3;
  padding: 16px;
  width: 216px;
  height: 306px;
  border-radius: 12px;
  background-color: #181818;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledWrapperCover = styled.div`
  margin-bottom: 16px;
  height: 186px;
  width: 186px;
  position: relative;

  img {
    border-radius: 12px;
    width: 100%;
  }
`;

export const StyledWrapperTitlePlayer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const StyledWrapperArtistName = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #a6a6a6;
`;

export const StyledUnblurredArea = styled.div`
  position: absolute;
  clip-path: inset(0);
`;

export const ImageCover = styled.div<ImageProps>`
  width: 100%;
  height: 100%;
  position: relative;

  &:before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: url(${(props) => props.url});
    background-size: contain;
  }

  &:before {
    filter: blur(10px);
  }

  &:after {
    clip-path: circle(
      25% at ${Math.floor(Math.random() * 101)}% ${Math.floor(Math.random() * 101)}%
    );
    z-index: 1;
  }
`;
