import styled from 'styled-components';

export const StyledAudio = styled.audio`
  display: none;
`;

export const StyledWrapperControllers = styled.div`
#iconPlay, #iconFoward, #iconReload {
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  &:hover {
    transform: scale(1.2);
  }

`;

export const StyledContainerController = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
