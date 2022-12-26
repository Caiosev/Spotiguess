import styled from 'styled-components';

export const StyledWrapperApp = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  #iconPlay {
    cursor: pointer;
    transition: 0.3s ease-in-out all;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
