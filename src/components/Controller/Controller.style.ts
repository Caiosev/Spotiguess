import styled from 'styled-components';

interface WrapperProps {
  activeEye: boolean;
}

export const StyledAudio = styled.audio`
  display: none;
`;

export const StyledWrapperControllers = styled.div<WrapperProps>`

#iconEye {
  cursor: ${(props) => (props.activeEye ? 'pointer' : 'default')};
  transition: 0.3s ease-in-out all;
  &:hover {
    transform: ${(props) => (props.activeEye ? 'scale(1.2);' : '')};
    }   
  }

#iconPlay, #iconFoward {
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
